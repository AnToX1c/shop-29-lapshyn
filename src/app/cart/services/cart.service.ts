import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductCartModel } from '../../products/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemsChanged$: Subject<any> = new Subject<any>();
  private cartProducts: Array<ProductCartModel> = [];
  private totalQuantity = 0;
  private totalSum = 0;

  constructor() { }

  getProducts(): ProductCartModel[] {
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
    this.itemsChanged$.next();
  }

  removeProduct(id: number): void {
    this.cartProducts = this.cartProducts.filter(i => i.id !== id);
    this.updateCartData();
    this.itemsChanged$.next();
  }

  changeQuantity(id: number, value: any): void {
    const exist = this.cartProducts.findIndex(i => i.id === id);
    if (exist !== -1) {
      this.cartProducts[exist].quantity = value;
      this.calcTotalPrice(exist);
      this.updateCartData();
      this.itemsChanged$.next();
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
