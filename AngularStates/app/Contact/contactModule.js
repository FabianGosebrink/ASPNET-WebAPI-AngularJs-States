(function () {

    "use strict";

    var contactModule = angular
        .module("contact.contactModule", ["ui.router"]);

    contactModule.config(contactconfig);

    contactconfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    /* @ngInject */
    function contactconfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('contact', {
            url: '/contact',
            controller: "contact.controllers.contactController",
            templateUrl: "app/Contact/Templates/contact.html"
        });
    }
})();
