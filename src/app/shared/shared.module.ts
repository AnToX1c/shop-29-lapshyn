import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HighlightDirective, StyledByClickDirective } from './directives';



@NgModule({
  declarations: [HighlightDirective, StyledByClickDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    HighlightDirective,
    StyledByClickDirective,
  ],
})
export class SharedModule { }
