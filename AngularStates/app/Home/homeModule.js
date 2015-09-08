(function () {

    "use strict";

    var homeModule = angular
        .module("home.homeModule", ["ui.router"]);

    homeModule.config(homeconfig);

    homeconfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    /* @ngInject */
    function homeconfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: "home.controllers.homeController",
            controllerAs: "viewModel",
            templateUrl: "app/Home/Templates/overview.html"
        });
    }
})();
