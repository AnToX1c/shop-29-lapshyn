import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartRoutingModule.components,
  ],
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
})
export class CartModule { }
