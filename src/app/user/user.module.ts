import { PaginationModule } from './../core/shared/pagination/pagination.module';
import { PipesModule } from './../core/pipes/pipes.module';
import { SearchModule } from './../core/shared/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { PaginationDirective } from '../core/directives/pagination.directive';



const routes = [
  {
    path: '',
    component: UsersComponent
  }
]
@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    CommonModule,
    SearchModule,
    PipesModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class UserModule { }
