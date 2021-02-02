import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HighlightDirective, StyledByClickDirective } from './directives';



@NgModule({
  declarations: [HighlightDirective, StyledByClickDirective],
  imports: [
    CommonModule,
    // Если эти модули не нужны для директивы этого модуля, то их можно только экспортировать
    // MatButtonModule,
    // MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    HighlightDirective,
    StyledByClickDirective,
  ],
})
export class SharedModule { }
