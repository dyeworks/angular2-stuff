System.register(['angular2/core', 'angular2/router', './common/data', './home/home', './login/login', './signup/signup', './dashboard/dash1', './common/logger'], function(exports_1, context_1) {
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
    var core_1, router_1, data_1, home_1, login_1, signup_1, dash1_1, logger_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (dash1_1_1) {
                dash1_1 = dash1_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(logger) {
                    this.title = 'Start app';
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log('yes');
                    //this.logger.log('test');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Home']\">Home</a>\n      <a [routerLink]=\"['Login']\">Login</a>\n      <a [routerLink]=\"['Signup']\">Signup</a>\n      <a [routerLink]=\"['Dash1']\">Dashboard1</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS, data_1.DataService, new core_1.Provider(logger_1.Logger, { useClass: logger_1.Logger })
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['/Home'] },
                        { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
                        { path: './login', component: login_1.Login, name: 'Login' },
                        { path: './signup', component: signup_1.Signup, name: 'Signup' },
                        { path: './dash1', component: dash1_1.Dash1, name: 'Dash1' }
                    ]), 
                    __metadata('design:paramtypes', [logger_1.Logger])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map