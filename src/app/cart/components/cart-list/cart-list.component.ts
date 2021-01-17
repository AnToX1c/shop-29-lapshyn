import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  trackByProducts(index: number, item): number {
    return item.id;
  }
}
