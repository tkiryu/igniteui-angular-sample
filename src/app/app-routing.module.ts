import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/todo', pathMatch: 'full' },
	{ path: 'todo', component: TodoComponent, data: { text: 'ToDo' } },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
