import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
  ) { }

  ngOnInit(): void {
  }

  trackByProducts(index: number, item: Product): number {
    return item.id;
  }
}
