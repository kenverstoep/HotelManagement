/**
 * Created by Kenneth on 20-3-2017.
 */

hotelManagementModule.controller('HotelController', function ($scope, StorageService) {

    if(localStorage.getItem("hotels")==null) {
        localStorage.setItem("hotels", JSON.stringify([{
            id: "", name: "testHotel", city: "gouda", address: "Kwikkwekkwakstraat 10", zipcode: "2467LK"
        }]));
    }

    $scope.hotels = JSON.parse(localStorage.getItem("hotels"));
    $scope.newHotel={};
    this.clickedHotel;

    $scope.selectHotel = function(hotel) {
        clickedHotel = angular.copy(hotel);
        $scope.tempHotel = angular.copy(hotel);
    };

    $scope.updateHotel = function() {
        StorageService.updateStorage("hotels", $scope.tempHotel.id, $scope.tempHotel);
        $scope.hotels = StorageService.getItemsFromStorageByKey("hotels");
    };

    $scope.resetFields = function(){
        $scope.tempHotel = angular.copy(clickedHotel);
    };

    $scope.addHotel = function(){
        var newHotel = {id:"", name: $scope.newHotel.name, city: $scope.newHotel.city, address: $scope.newHotel.address, zipcode: $scope.newHotel.zipcode};
        StorageService.saveToStorage("hotels", newHotel);
        $scope.hotels = StorageService.getItemsFromStorageByKey("hotels");
    };

    $scope.selectHotel($scope.hotels[0]);
});