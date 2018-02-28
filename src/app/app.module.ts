import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {
  IgxCheckboxModule,
  IgxButtonModule,
  IgxRippleModule,
  IgxIconModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule
} from 'igniteui-angular/main';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { AddTodoItemComponent } from './todo/add-todo-item/add-todo-item.component';
import { AppRoutingModule } from './app-routing.module';

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
    IgxRippleModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
