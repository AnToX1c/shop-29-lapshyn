import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    HighlightDirective,
  ],
})
export class SharedModule { }
