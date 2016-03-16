import { Component, OnInit, Provider } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DataService } from './common/data';
//import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from './home/home';
import {Login} from './login/login';
import {Signup} from './signup/signup';
import {Dash1} from './dashboard/dash1';
import {Logger} from './common/logger';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Login']">Login</a>
      <a [routerLink]="['Signup']">Signup</a>
      <a [routerLink]="['Dash1']">Dashboard1</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, DataService, new Provider(Logger, {useClass: Logger})
  ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: './login', component: Login, name: 'Login' },
  { path: './signup', component: Signup, name: 'Signup' },
  { path: './dash1', component: Dash1, name: 'Dash1' }
])
export class AppComponent {
  title = 'Start app';
  logger: Logger;
constructor(logger: Logger){

}
  ngOnInit() {
    console.log('yes');
    //this.logger.log('test');
  }

}
