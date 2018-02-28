import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  IgxCheckboxModule,
  IgxButtonModule,
  IgxRippleModule,
  IgxIconModule
} from 'igniteui-angular/main';

import { TodoComponent } from './pages/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';

export const routes: Routes = [
	{ path: '', component: TodoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxCheckboxModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
  ],
  declarations: [
    TodoComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ]
})
export class TodoModule { }
