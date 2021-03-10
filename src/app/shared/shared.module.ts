import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { HighlightDirective, StyledByClickDirective } from './directives';
import { OrderByPipe } from './pipes';



@NgModule({
  declarations: [
    HighlightDirective,
    StyledByClickDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    // Если эти модули не нужны для директивы этого модуля, то их можно только экспортировать
    // MatButtonModule,
    // MatCardModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    HighlightDirective,
    StyledByClickDirective,
    OrderByPipe,
  ],
})
export class SharedModule { }
