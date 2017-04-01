//var module = angular.module('customerController');
hotelManagementModule.controller('CustomerController', function ($scope, StorageService) {

    if(((StorageService.getItemsFromStorageByKey("hotels")) == null) || (StorageService.getItemsFromStorageByKey("hotels")[0] == null)){
        StorageService.saveToStorage("hotels", {id:"1", name: "van der Valk", city: "Nootdorp", address: "Estaffeteweg", zipcode: "2476TB"});
    }

    if(((StorageService.getItemsFromStorageByKey("customers")) == null) || (StorageService.getItemsFromStorageByKey("customers")[0] == null)){
        StorageService.saveToStorage("customers", {id:"1", firstname: "Kenneth", lastname: "Verstoep", hotel: "1",
            room: "213", date: "10-12-2017"})
    }

    $scope.hotels = JSON.parse(localStorage.getItem("hotels"));
    $scope.newCustomer = {};
    var hotels = JSON.parse(localStorage.getItem("hotels"));
    $scope.customers = JSON.parse(localStorage.getItem("customers"));
    var clickedCustomer;

    $scope.addCustomer = function () {
        var newCustomer = {id:"", firstname: $scope.newCustomer.firstname, lastname: $scope.newCustomer.lastname, hotel: $scope.newCustomer.hotel,
            room: $scope.newCustomer.room, date: $scope.newCustomer.date};
        StorageService.saveToStorage("customers", newCustomer);
        $scope.customers = JSON.parse(localStorage.getItem("customers"));
    };

    $scope.resetFields = function(){
        $scope.tempCustomer = angular.copy(clickedCustomer);
    }

    $scope.selectCustomer = function(customer) {
        clickedCustomer = angular.copy(customer);
        $scope.tempCustomer = angular.copy(customer);
    };

    $scope.updateCustomer = function() {
        StorageService.updateStorage("customers", $scope.tempCustomer.id, $scope.tempCustomer);
        $scope.customers = JSON.parse(localStorage.getItem("customers"));
    };

    $scope.deleteCustomer = function(){
        StorageService.deleteFromStorage("customers", $scope.tempCustomer.id);
        $scope.customers = JSON.parse(localStorage.getItem("customers"));
        $scope.selectCustomer($scope.customers[0]);
    };

    $scope.selectCustomer($scope.customers[0]);
});