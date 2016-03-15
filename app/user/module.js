/* global angular */
(function () {
    'use strict';

    var appUser = angular.module('appUser', ['ngRoute']); //['$strap.directives'])
    appUser.config(['$routeProvider', function ($routeProvider) {
        // orv stuff
        // don't put controllers anywhere in here if they are in the header of the html file, it double fires

        //$routeProvider.when('/user/finder/', { templateUrl: 'user/finder.html' }); //, controller: 'finder'
        //$routeProvider.when('/user/edit/', { templateUrl: 'user/edit.html' }); //, controller: 'detail'
        //$routeProvider.when('/user/login/', { templateUrl: 'user/login.html' }); //, controller: 'detail'
        //$routeProvider.when('/user/register/', { templateUrl: 'user/register.html' }); //, controller: 'detail'
        //$routeProvider.when('/user/password/', { templateUrl: 'user/password.html' }); //, controller: 'detail'

    }]);

})();

