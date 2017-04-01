/**
 * Created by Kenneth on 10-3-2017.
 */
var hotelManagementModule = angular.module('HotelManagement',['ngRoute']);
hotelManagementModule.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/customer.html',
            controller: 'CustomerController'
        })

        .when('/hotel', {
            templateUrl: 'views/hotel.html',
            controller: 'HotelController'
        })

        .when('/employee', {
            templateUrl: 'views/employee.html',
            controller: 'EmployeeController'
        });

    $locationProvider.hashPrefix('');
});