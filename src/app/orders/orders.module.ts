import { NgModule } from '@angular/core';

import { ProcessOrderComponent } from './components';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    ProcessOrderComponent,
  ],
  imports: [
    OrdersRoutingModule,
  ]
})
export class OrdersModule { }
