import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {TodosComponent} from "./todos/todos.component";
import {TodoComponent} from "./todos/todo/todo.component";
import {TodoDetailsComponent} from "./todos/todo/todo-details/todo-details.component";


@NgModule ({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent,

  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ]
})
export class TodoModule {
}
