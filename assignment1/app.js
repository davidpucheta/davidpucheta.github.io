(function () {
    'use strict';

    angular.module('tooMuchApp', [])
        .controller('tooMuchController', tooMuchController);

    //tooMuchController.$inject = ['$scope'];

    function tooMuchController($scope) {
        $scope.isItTooMuchMessage = "David";

        $scope.tooMuchBtn = function(){
            var countItems = countItems($scope.list);

            if (countItems === 0){
                $scope.isItTooMuchMessage =  "Empty";
            } else {
                countItems > 3 ? $scope.isItTooMuchMessage = "Too much!" : $scope.isItTooMuchMessage = "Enjoy!";
            }
        };

        function countItems(items){
        var arrItems = items.split(",")
        return arrItems.length;
    }
    }

    

})();