System.register(["angular2/core","angular2/router","./hero.service"],function(e,t){"use strict";var r,o,n,i,c=(t&&t.id,this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,c=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(c=(3>i?n(c):i>3?n(t,r,c):n(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c}),a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};return{setters:[function(e){r=e},function(e){o=e},function(e){n=e}],execute:function(){i=function(){function e(e,t){this._heroService=e,this._router=t,this.heroes=[]}return e.prototype.ngOnInit=function(){var e=this;this._heroService.getHeroes().then(function(t){return e.heroes=t.slice(1,5)})},e.prototype.gotoDetail=function(e){var t=["HeroDetail",{id:e.id}];this._router.navigate(t)},e=c([r.Component({selector:"my-dashboard",templateUrl:"app/dashboard.component.html",styleUrls:["app/dashboard.component.css"]}),a("design:paramtypes",[n.HeroService,o.Router])],e)}(),e("DashboardComponent",i)}}});