<<<<<<< HEAD
System.register(['angular2/core', 'angular2/router', './hero.service', './dashboard.component', './heroes.component', './hero-detail.component'], function(exports_1, context_1) {
=======
System.register(['angular2/core', 'angular2/router', './LoggedInOutlet', './home/home', './login/login', './signup/signup'], function(exports_1, context_1) {
>>>>>>> ee2f05e7b4926500587820d60bf768c00888f4b2
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
<<<<<<< HEAD
    var core_1, router_1, hero_service_1, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var AppComponent;
=======
    var core_1, router_1, LoggedInOutlet_1, home_1, login_1, signup_1;
    var App;
>>>>>>> ee2f05e7b4926500587820d60bf768c00888f4b2
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
<<<<<<< HEAD
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
=======
            function (LoggedInOutlet_1_1) {
                LoggedInOutlet_1 = LoggedInOutlet_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            }],
        execute: function() {
            //let template = require('./app.html');
            App = (function () {
                function App(router) {
                    this.router = router;
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'auth-app'
                    }),
                    core_1.View({
                        //template: template,
                        directives: [LoggedInOutlet_1.LoggedInRouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['/Home'] },
                        { path: '/home', component: home_1.Home, as: 'Home' },
                        { path: '/login', component: login_1.Login, as: 'Login' },
                        { path: '/signup', component: signup_1.Signup, as: 'Signup' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            }());
            exports_1("App", App);
>>>>>>> ee2f05e7b4926500587820d60bf768c00888f4b2
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map