/**
 * Created by Kenneth on 31-3-2017.
 */
/**
 * Created by Kenneth on 27-3-2017.
 */

hotelManagementModule.controller('EmployeeController', function ($scope, StorageService) {
    $scope.employees = JSON.parse(localStorage.getItem("employees"));
    $scope.newEmployee={};
    $scope.hotels = JSON.parse(localStorage.getItem("hotels"));
    var newTempEmployee = {};

    //When leaderboolean and leader is not declared, they will be undifined and the program will crash.
    $scope.newEmployee.leaderboolean = false;
    $scope.newEmployee.leader = "";
    var clickedEmployee={};

    //I push one empty leader so i can select an empty row.
    $scope.leaders=[];
    $scope.leaders.push({id:-1, firstname:"", lastname:"", dateofbirth:"", leaderboolean:true, leader:"", hotel:""})

    $scope.employees.forEach(function(employee) {
        if(employee.leaderboolean === true){
            $scope.leaders.push(angular.copy(employee));
        }
    }, this);

    $scope.selectEmployee = function(employee) {
        clickedEmployee = angular.copy(employee);
        $scope.tempEmployee = angular.copy(employee);
    };

    $scope.updateEmployee = function() {
        StorageService.updateStorage("employees", $scope.tempEmployee.id, $scope.tempEmployee);
        $scope.employees = JSON.parse(localStorage.getItem("employees"));
    };

    $scope.resetFields = function(){
        $scope.tempEmployee = angular.copy(clickedEmployee);
    };

    $scope.addEmployee = function(){
        var newEmployee = {id:"", firstname: newTempEmployee.firstname, lastname: newTempEmployee.lastname, dateofbirth: newTempEmployee.dateofbirth,
            leaderboolean: newTempEmployee.leaderboolean, leader: newTempEmployee.leader, hotel: newTempEmployee.hotel};
        StorageService.saveToStorage("employees", newEmployee);
        $scope.employees = JSON.parse(localStorage.getItem("employees"));
    };

    /* resetting all newEmployee values so the filters in my form work properly when creating second employee*/
    $('#newEmployeeForm').submit(function () {
        $('#newEmployeeModal').modal('hide');
        newTempEmployee = angular.copy($scope.newEmployee); //next line will clear the $scope.newEmployee so fast that the addEmployee will crash.
        $scope.newEmployee = {}; // i clear the newEmployee so the input fields of the form are reset.
        document.getElementById("newEmployeeForm").reset();
    });

    $scope.selectEmployee($scope.employees[0]);
});