import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  IgxCheckboxModule,
  IgxButtonModule,
  IgxIconModule,
  IgxNavbarModule
} from 'igniteui-angular/main';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { AddTodoItemComponent } from './todo/add-todo-item/add-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
