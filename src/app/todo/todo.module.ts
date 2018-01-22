import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IgxCheckboxModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule
} from 'igniteui-angular/main';

import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavbarModule
  ],
  exports: [
    TodoComponent
  ],
  declarations: [
    TodoComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
