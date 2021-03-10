import { Injectable } from '@angular/core';

import { ProductCartModel } from '../../products/models/products.model';
import { LocalStorageService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: Array<ProductCartModel> = [];
  private totalQuantity = 0;
  private totalSum = 0;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  getProducts(): ProductCartModel[] {
    this.cartProducts = this.localStorageService.getData('cartProducts');
    this.updateCartData();
    return [...this.cartProducts];
  }

  addProduct(item: ProductCartModel): void {
    const exist = this.cartProducts.findIndex(i => i.id === item.id);
    if (exist !== -1) {
      this.cartProducts[exist].quantity += 1;
      this.calcTotalPrice(exist);
    } else {
      item.quantity = 1;
      item.totalPrice = item.price;
      this.cartProducts.push(item);
    }
    this.updateCartData();
    this.localStorageService.setData('cartProducts', this.cartProducts);
  }

  removeProduct(id: number): void {
    this.cartProducts = this.cartProducts.filter(i => i.id !== id);
    this.updateCartData();
    this.localStorageService.setData('cartProducts', this.cartProducts);
  }

  changeQuantity(id: number, value: any): void {
    const exist = this.cartProducts.findIndex(i => i.id === id);
    if (exist !== -1) {
      this.cartProducts[exist].quantity = value;
      this.calcTotalPrice(exist);
      this.updateCartData();
      this.localStorageService.setData('cartProducts', this.cartProducts);
    }
  }

  getTotalPrice(): number {
    return this.totalSum;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  private calcTotalPrice(index: number): void {
    this.cartProducts[index].totalPrice = this.cartProducts[index].quantity * this.cartProducts[index].price;
  }

  private updateCartData(): void {
    this.totalQuantity = this.cartProducts.reduce((prev, curr) => prev + curr.quantity, 0);
    this.totalSum = this.cartProducts.reduce((prev, curr) => prev + curr.totalPrice, 0);
  }
}
