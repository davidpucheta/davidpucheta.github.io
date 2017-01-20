(function () {
    'use strict';

    angular.module('tooMuchApp', [])
        .controller('tooMuchController', tooMuchController);

    //tooMuchController.$inject = ['$scope'];

    function tooMuchController($scope) {
        $scope.isItTooMuchMessage = "David";

        $scope.sayMessage = function(){
            return "David likes to eat peanuts at midnight";
        };

    }
})();