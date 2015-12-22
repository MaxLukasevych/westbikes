'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", function($scope) {


$scope.bike = {};


$scope.bikes =   JSON.parse(localStorage.getItem('bikes'))
if (!$scope.bikes) {
	$scope.bikes = [];
}

$scope.addBike = function (max){
	$scope.bikes.push(max);
	localStorage.setItem('bikes', JSON.stringify($scope.bikes));
	$scope.bike = {};
}




}]);