var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/partials/login.html',
        controller: 'UsersController as UC'
    })
    .when('/appointments', {
        templateUrl: 'views/partials/appointments.html',
        controller: 'AppointmentsController as AC'
    })
    .when('/new_appointment', {
        templateUrl: 'views/partials/new_appointment.html',
        controller: 'AppointmentsController as AC'
    })
});