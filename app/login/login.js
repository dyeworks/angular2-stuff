System.register(['angular2/core', 'angular2/router', 'angular2/common', '../common/data'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, data_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(router, dataservice) {
                    this.router = router;
                    this.dataservice = dataservice;
                }
                Login.prototype.login = function (event, username, password) {
                    var l = this.dataservice.login(username, password);
                    /*      .subscribe(
                          data => {
                            this.data = 'ok';
                            localStorage.setItem('wytoken', data.token);
                            localStorage.setItem('user', data);
                            this.router.parent.navigateByUrl('/home');
                          },
                          err => {
                            alert(err.text());
                            console.log(err.text());
                          }
                        );
                        */
                };
                Login.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login'
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: './app/login/login.html',
                        styleUrls: ['./app/login/login.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_1.DataService])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map