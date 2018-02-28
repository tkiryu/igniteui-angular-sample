import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
