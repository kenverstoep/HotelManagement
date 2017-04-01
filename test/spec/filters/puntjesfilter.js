// describe('Filter: puntjesfilter', function(){
//
//     var filter;
//
//     beforeEach(function(){
//         module('testApp.filters');
//         inject(function($filter){
//             filter = $filter('puntjesFilter');
//         });
//     });
//
//     it("should add dots until the length is less than 20", function(){
//        var input = "Hallo Wereld!";
//        var output = "Hallo Wereld!.......";
//
//        expect(filter(input)).toBe(output);
//     });
//
//     it("should not add dots when length is 20", function(){
//         var input = "Goedemorgen Wereld!!";
//         var output = "Hallo Wereld!.......";
//
//         expect(filter(input)).toBe(output);
//     });
// });