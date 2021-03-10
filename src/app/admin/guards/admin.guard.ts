import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../../core/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanActivate AdminGuard is called');
    return this.checkRole();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanLoad AdminGuard is called');
    return this.checkRole();
  }

  private checkRole(): boolean | UrlTree {
    const currentUser = this.loginService.getRole();

    if (currentUser === 'admin') {
      return true;
    }
    return this.router.parseUrl('');
  }
}
