'use strict';

/**
 * @ngdoc function
 * @name tp6App.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the tp6App
 */

 var sirApp = angular.module('tp6App');

  sirApp.controller('PersonCtrl', function($scope, $log, $http, $location){
            $scope.user = {};
			$scope.persons = [];
           $scope.submitForm = function(){
				  $http({
                      url: '/rest/Person',
                      method: 'POST',
                      data: $scope.user
                  }).success(function(data){
                    if (!data.errors) {
                         $location.path('/person');
                      }
                  });
              };

			$http({
              url: '/rest/Person',
              method: 'GET',
          }).then(function successCallback(response) {
              console.log(response.data.person);
			  $scope.persons = response.data.person;
			  console.log($scope.persons);

          });
  });

