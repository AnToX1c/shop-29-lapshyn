import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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

  constructor(
    public productsService: ProductsService,
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  onBuy(id: number): void {
    const item: Product = this.productsService.getProduct(id);
    if (item.isAvailable) {
      this.cartService.addProduct(item);
    }
  }

  trackByProducts(index: number, item: Product): number {
    return item.id;
  }
}
