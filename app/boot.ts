import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

//add provicers in htmland in here
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS
]);
