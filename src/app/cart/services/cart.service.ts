import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ProductCartModel } from '../../products/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemsChanged$: Subject<any> = new Subject<any>();
  private purchasedItems: Array<ProductCartModel> = [];

  constructor() { }

  getProducts(): ProductCartModel[] {
    return [...this.purchasedItems];
  }

  addProduct(item: ProductCartModel): void {
    const exist = this.purchasedItems.findIndex(i => i.id === item.id);
    if (exist !== -1) {
      this.purchasedItems[exist].quantity += 1;
      this.calcTotalPrice(exist);
    } else {
      item.quantity = 1;
      item.totalPrice = item.price;
      this.purchasedItems.push(item);
    }
    this.itemsChanged$.next();
  }

  deleteProduct(id: number): void {
    this.purchasedItems = this.purchasedItems.filter(i => i.id !== id);
    this.itemsChanged$.next();
  }

  updateProduct(id: number, key: string, value: any): void {
    const exist = this.purchasedItems.findIndex(i => i.id === id);
    if (exist !== -1) {
      this.purchasedItems[exist][key] = value;
      this.calcTotalPrice(exist);
      this.itemsChanged$.next();
    }
  }

  getSummaryBy(key: string): number {
    return this.purchasedItems.reduce((prev, curr) => prev + curr[key], 0);
  }

  private calcTotalPrice(index: number): void {
    this.purchasedItems[index].totalPrice = this.purchasedItems[index].quantity * this.purchasedItems[index].price;
  }
}
