import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart';

@Component({
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.productID;
    this.product$ = this.productsService.getProduct(id);
  }

  onBuy(product: Product): void {
    this.cartService.addProduct(product);
  }
}
