var app = angular.module('postFeed', ['ionic']);

app.service('dataService', ['$http', '$q', function ($http, $q) {
  
  var defer = $q.defer();

  $http.get('json/purl.json').then(function(data){
    defer.resolve(data);
  });

  this.getData = function() {
    return defer.promise;
  }


  this.getJsonData = function(data) {

    jsonData = data;

    navigationData = jsonData.nav;

    console.log(navigationData);

    this.nav = function() {
      
    };

    
  };

  this.setNav = function() {
    return navigationData.nav_data;
  }

}]);


app.controller('postController', function($scope, $ionicSideMenuDelegate ,dataService){

  var promise = dataService.getData();

  promise.then(function(data) {

    dataService.getJsonData(data.data);

    return true;

  }).then( function() {

    console.log(dataService.setNav());
    $scope.navData = dataService.setNav();

  });


  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };



});






app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
