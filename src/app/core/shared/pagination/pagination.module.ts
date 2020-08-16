import { PaginationDirective } from './../../directives/pagination.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    PaginationComponent,
    PaginationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    PaginationDirective
  ]
})
export class PaginationModule { }
