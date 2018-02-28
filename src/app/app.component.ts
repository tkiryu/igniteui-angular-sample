import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { routes } from "./app-routing.module";
import { IgxNavigationDrawerComponent } from 'igniteui-angular/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  topNavLinks: Array<{
    path: string,
		name: string
  }> = [];

  title: string;

  @ViewChild(IgxNavigationDrawerComponent) drawer: IgxNavigationDrawerComponent;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.title,
					path: '/' + route.path
				});
			}
		}
  }

  ngOnInit(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        this.title = event['title'];
        this.titleService.setTitle(this.title);
        this.drawer.close();
      });
  }
}
