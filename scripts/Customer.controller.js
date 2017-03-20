var module = angular.module('customerController', []);
module.controller('CustomerController', function ($scope) {

    $scope.customers = [
        {id: '1', firstname: 'Henk', lastname: 'Verhagen'},
        {id: '3', firstname: 'Hans', lastname: 'Rooi'}
    ];

    $scope.addCustomer = function () {
        var newCustomer = {firstname: $scope.tempCustomer.firstname, lastname: $scope.tempCustomer.lastname};
        console.log(newCustomer);
        newCustomer.id=2;
        console.log($scope.customers);

        $scope.customers.push(newCustomer);


        console.log($scope.customers);
        //$scope.firstNameText = '';
        //$scope.lastNameText = '';
        //debugger;
    }

    $scope.selectCustomer = function(customer) {
        $scope.tempCustomer = angular.copy(customer);
    }

    $scope.updateCustomer = function() {

        $scope.customers.forEach(function(current) {
            if(current.id === $scope.tempCustomer.id){
                current.firstname = $scope.tempCustomer.firstname;
                current.lastname = $scope.tempCustomer.lastname;
            }
        }, this);
    };
});