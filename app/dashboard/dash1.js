System.register(['angular2/core', 'angular2/common', 'angular2/http', 'angular2/router', 'ag-grid-ng2/main'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1, main_1;
    var Dash1;
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
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            Dash1 = (function () {
                function Dash1(router, http) {
                    this.router = router;
                    this.http = http;
                    this.jwt = localStorage.getItem('jwt');
                    //    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
                    // put columnDefs directly onto the controller
                    this.columnDefs = [
                        { headerName: "Make", field: "make" },
                        { headerName: "Model", field: "model" },
                        { headerName: "Price", field: "price" }
                    ];
                    // put data directly onto the controller
                    this.rowData = [
                        { make: "Toyota", model: "Celica", price: 35000 },
                        { make: "Ford", model: "Mondeo", price: 32000 },
                        { make: "Porsche", model: "Boxter", price: 72000 }
                    ];
                }
                Dash1.prototype.logout = function () {
                    localStorage.removeItem('jwt');
                    this.router.parent.navigateByUrl('/login');
                };
                Dash1 = __decorate([
                    //
                    core_1.Component({
                        selector: 'home'
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES, main_1.AgGridNg2],
                        templateUrl: './app/dashboard/dash1.html',
                        styleUrls: ['./app/dashboard/dash1.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], Dash1);
                return Dash1;
            }());
            exports_1("Dash1", Dash1);
        }
    }
});
//# sourceMappingURL=dash1.js.map