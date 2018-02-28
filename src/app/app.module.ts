import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  IgxRippleModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule
} from 'igniteui-angular/main';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IgxRippleModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
