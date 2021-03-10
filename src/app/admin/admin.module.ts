import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './components';
import { ProductFormComponent } from '../products';



@NgModule({
  declarations: [
    AdminComponent,
    ProductFormComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
