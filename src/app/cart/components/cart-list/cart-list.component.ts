import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { ProductCartModel } from '../../../products/models/products.model';

type Options = {
  value: string,
  name: string,
};

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})

export class CartListComponent implements OnInit, OnDestroy {
  isAsc = true;
  options: Options[] = [
    { value: 'name', name: 'Name' },
    { value: 'totalPrice', name: 'Price' },
    { value: 'quantity', name: 'Amount' },
  ];
  products: ProductCartModel[] = [];
  selectedOption: string = this.options[0].value;
  private itemsChanged: Subscription;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.itemsChanged = this.cartService.itemsChanged$.pipe(
      startWith('start'), // фейковый старт потока, чтобы запустить updateProducts
      tap(() => this.updateProducts()),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.itemsChanged.unsubscribe();
  }

  onDelete(id: number): void {
    this.cartService.removeProduct(id);
  }

  onQuantityChange(id: number, quantity: number): void {
    this.cartService.changeQuantity(id, quantity);
  }

  getTotalItems(): number {
    return this.cartService.getTotalQuantity();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  trackByProducts(index: number, item): number {
    return item.id;
  }

  private updateProducts(): void {
    this.products = this.cartService.getProducts();
  }
}
