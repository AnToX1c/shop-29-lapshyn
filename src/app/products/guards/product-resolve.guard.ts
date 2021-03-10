import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { Product, Products } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new Product(null, '', '', null, Products.Others, false));
    }

    const id = +route.paramMap.get('productID');
    console.log(id);

    return this.productsService.getProduct(id).pipe(
      map((product: Product) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products-list']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products-list']);
        return of(null);
      })
    );

  }

}
