// app.controller('PersonController', function (PersonService) {
//
// });


angular.module('personApp').controller('PersonController', [
  'PersonService',
  function(PersonService) {
    console.log("loaded person controller");


    // FavoritesService.saveFavorite({url:'test.com',comment:'does this work'});

    var vm = this;

    // vm.getPeople = function() {
      // console.log('get');
      PersonService.getPeople().then(function(people) {

        vm.peopleList=people;
      });
    // };

    vm.addPerson = function(first,last,home,movie) {
      console.log('add '+first+' '+last);
      PersonService.addPerson(first,last,home,movie);
      PersonService.getPeople().then(function(people) {
        console.log(people);
        vm.peopleList=people;
      });
    };
    vm.changePerson = function(first,last,home,movie,id) {
      console.log('change '+first+' '+last+' '+id);
      PersonService.changePerson(first,last,home,movie,id);
      PersonService.getPeople().then(function(people) {
        console.log(people);
        vm.peopleList=people;
      });
    };
    vm.deletePerson = function(id) {
      console.log('delete '+id);
      PersonService.deletePerson(id);
      PersonService.getPeople().then(function(people) {
        console.log(people);
        vm.peopleList=people;
      });
    };


  }
]);
