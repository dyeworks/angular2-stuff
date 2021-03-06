System.register(['angular2/core', 'angular2/common', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(router, http) {
                    this.router = router;
                    this.http = http;
                    this.jwt = localStorage.getItem('jwt');
                    //    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
                }
                Home.prototype.logout = function () {
                    localStorage.removeItem('jwt');
                    this.router.parent.navigateByUrl('/login');
                };
                Home.prototype.callAnonymousApi = function () {
                    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
                };
                Home.prototype.callSecuredApi = function () {
                    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
                };
                Home.prototype._callApi = function (type, url) {
                    var _this = this;
                    this.response = null;
                    if (type === 'Anonymous') {
                        // For non-protected routes, just use Http
                        this.http.get(url)
                            .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
                    }
                    if (type === 'Secured') {
                    }
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home'
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES],
                        templateUrl: './app/home/home.html',
                        styleUrls: ['./app/home/home.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map