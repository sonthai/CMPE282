/**
 * http://usejsdoc.org/
 */

		
		var application = angular.module("Mymodule",[]).controller("Mycontroller",function($scope, $http) {
		    $http.get('http://localhost:3000/login').
		        then(function(data) {
		            $scope.greeting = data;
		        });
		});
		
		
		
		