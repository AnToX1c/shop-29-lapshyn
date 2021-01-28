import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { ProductCartModel } from '../../../products/models/products.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {
  public products: ProductCartModel[] = [];
  private itemsChanged: Subscription;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // this.updateProducts();
    this.itemsChanged = this.cartService.itemsChanged$.pipe(
      startWith('start'), // фейковый старт потока, чтобы запустить updateProducts
      // но мне кажеться, что его запускать не нужно, ведь корзина должна обновиться
      // после того, как туда попадет первый товар
      tap(() => this.updateProducts()),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.itemsChanged.unsubscribe();
  }

  onDelete(id: number): void {
    this.cartService.deleteProduct(id);
  }

  onQuantityChange(id: number, quantity: number): void {
    this.cartService.updateProduct(id, 'quantity' , quantity);
  }

  getTotalItems(): number {
    return this.cartService.getSummaryBy('quantity');
  }

  getTotalPrice(): number {
    return this.cartService.getSummaryBy('totalPrice');
  }

  trackByProducts(index: number, item): number {
    return item.id;
  }

  private updateProducts(): void {
    this.products = this.cartService.getProducts();
  }
}
