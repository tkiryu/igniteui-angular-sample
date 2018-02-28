import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule', data: { title: 'Home' } },
	{ path: 'todo', loadChildren: 'app/modules/todo/todo.module#TodoModule', data: { title: 'ToDo' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
