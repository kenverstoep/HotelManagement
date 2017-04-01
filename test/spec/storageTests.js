describe("storage service tests", function() {

    beforeEach(function () {
        module("HotelManagement");
        inject(function(StorageService) {
            service = StorageService;
        })
    });

    it("should add first element in storage", function () {
        var testItem = {
            id: "1",
            name: "testElement"
        };

        service.saveToStorage("test", testItem);

        expect(JSON.parse(localStorage.getItem("test"))).not.toBeNull(null);
    });

    it("should add second element in storage", function () {
        var testItem = {
            id: "1",
            name: "testItem"
        };

        var testItem2 = {
          id: "2",
            name: "testItem2"
        };

        service.saveToStorage("test", testItem);
        service.saveToStorage("test", testItem2);

        expect(JSON.parse(localStorage.getItem("test"))).toEqual([testItem, testItem2]);
    });



    it("should delete item with id:2 in localStorage", function () {
        var testItem = {
            id: "1",
            name: "TestItem"
        };

        var testItem2 ={
            id: "2",
            name: "TestItem2"
        };

        service.saveToStorage("test", testItem);
        service.saveToStorage("test", testItem2);
        service.deleteFromStorage('test', '2');

        expect(JSON.parse(localStorage.getItem("test"))).toEqual([testItem]);
    });

    it("should update item with id:1 in localStorage", function () {
        var testItem = {
            id: "1",
            name: "TestItem"
        };

        var updatedTestItem ={
            id: "1",
            name: "UpdatedTestItem"
        };

        service.saveToStorage("test", testItem);
        service.updateStorage("test", updatedTestItem.id, updatedTestItem);

        expect(JSON.parse(localStorage.getItem("test"))).toEqual([updatedTestItem]);
    });

    it("should update item with id:1 in localStorage", function () {
        var testItem = {
            id: "1",
            name: "TestItem"
        };

        var updatedTestItem ={
            id: "1",
            name: "UpdatedTestItem"
        }

        service.saveToStorage("test", testItem);
        service.updateStorage("test", updatedTestItem.id, updatedTestItem);

        expect(JSON.parse(localStorage.getItem("test"))).toEqual([updatedTestItem]);
    });



    afterEach(function () {
        localStorage.removeItem('test');
    });

});