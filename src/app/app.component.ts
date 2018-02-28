import { Component, ChangeDetectionStrategy } from '@angular/core';

import { routes } from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	topNavLinks: Array<{
		path: string,
		name: string
	}> = [];

  constructor() {
    for (const route of routes) {
			if (route.path && route.data && route.path.indexOf('*') === -1) {
				this.topNavLinks.push({
					name: route.data.text,
					path: '/' + route.path
				});
			}
		}

  }
}
