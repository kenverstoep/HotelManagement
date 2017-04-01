//this document is part of a tutorial
//
// describe('E2E: angularjs homepage statustext', function() {
//
//   beforeEach(function() {
//     browser.get('http://localhost:8080');
//   });
//
//   it('should display a status text', function() {
//
//     var p = element(by.tagName("p"));
//     var pText = p.getText();
//
//     expect(pText).toBe('Lorem ipsum dolor mit');
//   });
//
//   it('should display a different status text after button click', function() {
//
//     element(by.tagName('button')).click();
//
//     expect(element(by.tagName('p')).getText()).toEqual('Done!');
//   });
//
//   it('should display a hellow message when the form is submitted', function() {
//
//     element(by.model('name')).sendKeys("Dominic");
//
//     element(by.css('button#form-submit')).click();
//
//     expect(element(by.tagName('span')).getText()).toBe("Hellow Dominic");
//   });
//
//   it('should display a list of todo items', function() {
//     var rows = element.all(by.repeater('item in items')).count();
//     expect(rows).toBe(3);
//   });
//
// });