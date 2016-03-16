import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DataService } from './common/data';
//import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from './home/home';
import {Login} from './login/login';
import {Signup} from './signup/signup';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Login']">Crisis Center</a>
      <a [routerLink]="['Signup']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DataService
  ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: './login', component: Login, name: 'Login' },
  { path: './signup', component: Signup, name: 'Signup' }
])
export class AppComponent {
  title = 'Start app';

  ngOnInit() {
    console.log('yes');
  }

}
