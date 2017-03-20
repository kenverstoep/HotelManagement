var filtersModule = angular.module('testApp.filters', []);

filtersModule.filter('puntjesFilter', function(){
    return function(input){
        //hier komt je logica
        return "Hallo Wereld!.......";
    };
});

