/**
 * Created by Kenneth on 30-3-2017.
 */
describe('E2E: angularjs hotel test', function() {

    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('when the page loads, it should fill in the form with the first customer', function() {

        var firstNameCustomer = browser.findElement(by.id('FirstNameCustomer'));
        var fieldText = firstNameCustomer.getAttribute('value');
        expect(fieldText).toBe('Kenneth');

    });

    it('should reset the values of a edited field',function () {

        var firstNameCustomer = browser.findElement(by.id('FirstNameCustomer'));
        firstNameCustomer.sendKeys("Dennis");
        var resetButton = browser.findElement(by.id("resetButton"));
        resetButton.click();
        var fieldText = firstNameCustomer.getAttribute('value');

        expect(fieldText).toBe("Kenneth")

    });


});