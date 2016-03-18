import { Component, OnInit, Provider } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
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
  user: {};
  token: string;
  tracksteps: any[];
  codetree: any[];
constructor(logger: Logger, private dataservice: DataService, public router: Router){
}
  logout() {
    localStorage.removeItem('wytoken');
    this.token = '';
    this.user = {};
    this.router.parent.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log('yes');
    // get username
    // get codetree
    // get trackstep
    //this.logger.log('test');
  }

  getUser() {
      if (this.dataservice.isFresh('user', 43200)) { // 1/2 a day
        this.token = this.dataservice.load('wytoken');
          this.user = this.dataservice.load('user');
          console.log('got User from cache');
          // set up routing
          return;
      } else {
          this.router.parent.navigateByUrl('/login');
          return;
      }
  }

  getCodetree() {
      if (this.dataservice.isFresh('codetree', 43200)) { // 1/2 a day
          this.codetree = this.dataservice.load('codetree');
          console.log('got codetree from cache', '');
          return;
      } else {
          if (!this.user) return; // if we are not logged in we have no token

          var query = { id: 1 };
          console.log('loading codetree from server', '');
          var req = { collection: 'Cache', query: query }
          var z = this.dataservice.get(req)
            //  .then(function (data) {
            //      console.log('ok');
            //      this.codetree = data[0].json;
            //      this.dataservice.save('codetree', data[0].json);
            //  });
      }
  }

  getTrackStep() {
      if (this.tracksteps.length > 0) return;
      if (this.dataservice.isFresh('tracksteps', 43200)) { // 1/2 a day
          this.tracksteps = this.dataservice.load('tracksteps');
          console.log('got tracksteps from cache');
          return;
      }

      if (!this.user) return; // if we are not logged in we have no token

      var query = { archive: false };
      var req = { collection: 'Tracks', query: query }
      var z = this.dataservice.get(req)
          // .then(function (data) {
          //     this.tracksteps = data;
          //     this.dataservice.save('tracksteps', data);
          //     console.log('got tracksteps from database');
          // }
      //);
  }
  printpr() {
      var OLECMDID = 7;
      /* OLECMDID values:
       * 6 - print
       * 7 - print preview
       * 1 - open window
       * 4 - Save As
      */
      var PROMPT = 1; // 2 DONTPROMPTUSER
      var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
      document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
      //WebBrowser1.ExecWB(OLECMDID, PROMPT);
      //WebBrowser1.outerHTML = "";
  }
  emailto() {
      //var body = '%0D%0D%0DClick here: ' + window.location.href + ' to see the content.%0D%0DFrom:%0D' + this.user.name;
      //body = body.replace(/#/, '%23');
      //window.open('mailto: ?subject=PRD link&body=' + body);
  }

}
