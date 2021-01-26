import { Injectable } from '@angular/core';

import { Product, Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      new Product(1, 'Watch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 12500, Products.Luxury, true),
      new Product(2, 'Watch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 12500, Products.Luxury, false),
      new Product(3, 'Watch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 15500, Products.Luxury, true),
      new Product(4, 'TV', '1000000 colors', 44444, Products.Digital, true),
    ];
  }

  getProduct(id: number): Product {
    return this.getProducts().find(product => product.id === id);
  }
}
