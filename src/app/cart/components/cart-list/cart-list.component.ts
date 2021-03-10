import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ProductCartModel } from '../../../products/models/products.model';

type Options = {
  value: string,
  name: string,
};

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})

export class CartListComponent implements OnInit {
  isAsc = true;
  options: Options[] = [
    { value: 'name', name: 'Name' },
    { value: 'totalPrice', name: 'Price' },
    { value: 'quantity', name: 'Amount' },
  ];
  products: ProductCartModel[] = [];
  selectedOption: string = this.options[0].value;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.updateProducts();
  }

  onDelete(id: number): void {
    this.cartService.removeProduct(id);
    this.updateProducts();
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
