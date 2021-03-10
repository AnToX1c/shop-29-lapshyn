import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './products';
import { PathNotFoundComponent } from './path-not-found';
import { IsCartEmptyGuard } from './cart/guards/is-cart-empty.guard';
import { AdminGuard } from './admin/guards/admin.guard';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'order',
    canLoad: [IsCartEmptyGuard],
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
