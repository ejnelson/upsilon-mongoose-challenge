angular.module('personApp').service('PersonService', function ($http) {

      console.log('Person service loaded');
      //some way to send a post request to our server
      this.getPeople=function(){
        console.log('get people');
        return $http.get('/person').then(function(res){
          console.log(res);
          return res.data;
        }).catch(function(err){
          console.log("error getting people",err);
        });
      };

      this.addPerson=function(first,last,home,movie){
        var data={firstName:first,lastName:last,homeTown:home,favMovie:movie};
        console.log('get people');
        $http.post('/person',data).then(function(res){
          console.log('successful add');
        }).catch(function(err){
          console.log("error adding people",err);
        });
      };

      this.changePerson=function(first,last,home,movie,id){
        console.log('change people');
        var data={firstName:first,lastName:last,_id:id,homeTown:home,favMovie:movie};
        $http.put('/person',data).then(function(res){
          console.log('return from change',res);
          // res.data;
        }).catch(function(err){
          console.log("error changing person",err);
        });
      };

      this.deletePerson=function(id){
        console.log('Delete person');
        $http.delete('/person/'+id).then(function(res){
          console.log(res);
        }).catch(function(err){
          console.log("error deleting person",err);
        });
      };

});
