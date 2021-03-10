import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanLoad {
  constructor(
    private cartService: CartService,
    private router: Router,
  ) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('IsCartEmpty Guard is called');
    if (this.cartService.getProducts().length) {
      return true;
    }
    return this.router.parseUrl('');
  }
}
