import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components';
import { ProductFormComponent, ProductListComponent, ProductResolveGuard } from '../products';
import { ProcessOrderComponent } from '../orders/components';
import { AdminGuard } from './guards/admin.guard';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'product/add', component: ProductFormComponent },
      {
        path: 'product/edit/:productID',
        component: ProductFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          product: ProductResolveGuard,
        }
      },
      { path: 'orders', component: ProcessOrderComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
