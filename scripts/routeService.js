/**
 * Created by Kenneth on 10-3-2017.
 */
var hotelManagementModule = angular.module('HotelManagement',['ngRoute', 'customerController', 'hotelController']);
hotelManagementModule.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/customer.html',
            controller: 'CustomerController'
        })

        .when('/hotel', {
            templateUrl: 'views/hotel.html',
            controller: 'HotelController'
        });

    $locationProvider.hashPrefix('');
});