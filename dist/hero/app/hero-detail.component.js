System.register(["angular2/core","angular2/router","./hero.service"],function(e,t){"use strict";var o,r,n,i,c=(t&&t.id,this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,c=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(c=(3>i?n(c):i>3?n(t,o,c):n(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c}),a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};return{setters:[function(e){o=e},function(e){r=e},function(e){n=e}],execute:function(){i=function(){function e(e,t){this._heroService=e,this._routeParams=t}return e.prototype.ngOnInit=function(){var e=this,t=+this._routeParams.get("id");this._heroService.getHero(t).then(function(t){return e.hero=t})},e.prototype.goBack=function(){window.history.back()},e=c([o.Component({selector:"my-hero-detail",templateUrl:"app/hero-detail.component.html",styleUrls:["app/hero-detail.component.css"],inputs:["hero"]}),a("design:paramtypes",[n.HeroService,r.RouteParams])],e)}(),e("HeroDetailComponent",i)}}});