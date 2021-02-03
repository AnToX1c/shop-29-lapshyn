import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product, Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of([
      new Product(1, '1Watch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 12500, Products.Luxury, true),
      new Product(2, '2Watch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 12500.75, Products.Luxury, false),
      new Product(3, 'AWatch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 15500, Products.Luxury, true),
      new Product(4, 'ZWatch', 'Made in Switzerland, Production date: 2021, Steel Ceramic', 15500, Products.Luxury, true),
      new Product(5, '4TV', '1000000 colors', 44444, Products.Digital, true),
    ]);
  }

  getProduct(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(items => items.find(product => product.id === id)),
    );
  }
}
