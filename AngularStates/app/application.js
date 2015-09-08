(function() {

    "use strict";

    angular.module("AngularJsDemoApp",
    [
        "ui.router",
        "ngAnimate",
        "ngResource",
        "ui.bootstrap",
        "angular-loading-bar",
        "toastr",
        "app.common",
        "home.homeModule",
        "contact.contactModule"
    ]).config([
        "cfpLoadingBarProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider", function(cfpLoadingBarProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
            cfpLoadingBarProvider.includeSpinner = false;

            $urlRouterProvider.when('', '/');

            $locationProvider.html5Mode(true);
        }
    ]).run(["$state", function($state) {
        
    }]);

}());
