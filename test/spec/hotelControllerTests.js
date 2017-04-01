/**
 * Created by Kenneth on 29-3-2017.
 */
describe("hotel controller tests", function() {

    var scope;
    var $controller, controller;

    beforeEach(function () {
        module("HotelManagement");

        module(function ($provide) {
            $provide.service('StorageService', function () {
                var hotels = [];
                this.getItemsFromStorageByKey = jasmine.createSpy('getItemsFromStorageByKey').and.callFake(function (key, data) {
                    return hotels;
                });
                this.saveToStorage = jasmine.createSpy('saveToStorage').and.callFake(function (key, data) {
                    hotels.push(scope.hotels[0]);
                });
            })
        });

        inject(function (StorageService, $rootScope, _$controller_) {
            scope = $rootScope.$new();
            storageService = StorageService;
            $controller = _$controller_;
        });

        controller = $controller('HotelController', { $scope: scope});

    });

    it("should add a new hotel", function () {

        var hotel = {
            id: "",
            name: "testHotel",
            city: "gouda",
            address: "Kwikkwekkwakstraat 10",
            zipcode: "2467LK"
        };

        scope.newHotel = hotel;
        scope.addHotel();

        expect(scope.hotels).toEqual([hotel]);
    });

    it("should select hotel", function () {

        var hotel = {
            id: "",
            name: "testHotel",
            city: "gouda",
            address: "Kwikkwekkwakstraat 10",
            zipcode: "2467LK"
        };

        scope.selectHotel(hotel);
        expect(scope.tempHotel).toEqual(hotel);
    });

    it("should reset tempHotel", function () {

        var tempHotel = {
            id: "",
            name: "testAppartement",
            city: "gouda",
            address: "Kwikkwekkwakstraat 10",
            zipcode: "2467LK"
        };

        var hotel = {
            id: "",
            name: "testHotel",
            city: "gouda",
            address: "Kwikkwekkwakstraat 10",
            zipcode: "2467LK"
        };

        controller.clickedHotel = hotel;
        scope.tempHotel = tempHotel;
        scope.resetFields();

        expect(scope.tempHotel).toEqual(hotel);
    });

});