'use strict';


angular.module('core').controller('TestController', ['$scope',
	function($scope) {
		// This provides Authentication context.
		$scope.helloMsg = "Hello world binding";
	}
]);
