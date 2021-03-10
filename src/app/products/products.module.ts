import { NgModule } from '@angular/core';

import { ProductComponent, ProductListComponent, ProductViewComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductViewComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule { }
