'use strict';

app.controller('MainController', ['$scope', '$timeout', 'wikidata', function($scope, $timeout, wikidata) {

  $scope.enter = function(e) { 
    if(e.which === 13) {
      $scope.results = [];
      $timeout(function() {
        wikidata.getWikis($scope.search, getData);
      }, 300); 
       
    }
  }

  const getData = function(response) {
    if(response.status = 200) {
      $scope.results = response.data.query.pages; 
    } 
  }
}]);


