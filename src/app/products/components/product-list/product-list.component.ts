import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';
import { CartService } from '../../../cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onBuy(id: number): void {
    this.productsService.getProduct(id).pipe(
      take(1),
      filter(item => item.isAvailable),
      tap(product => this.cartService.addProduct(product)),
    ).subscribe();
  }

  trackByProducts(index: number, item: Product): number {
    return item.id;
  }
}
