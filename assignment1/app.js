(function () {
    'use strict';


    angular.module('tooMuchApp', [])
        .controller('tooMuchController', tooMuchController);

    //tooMuchController.$inject = ['$scope'];

    function tooMuchController($scope) {
        $scope.isItTooMuchMessage = "";

        $scope.tooMuchBtn = function(){
            var count = countItems($scope.list);

            if (count === 0){
                $scope.isItTooMuchMessage =  "Please enter data first";
            } else {
                count > 3 ? $scope.isItTooMuchMessage = "Too much!" : $scope.isItTooMuchMessage = "Enjoy!";
            }
        };

        function countItems(items){
            if(items === undefined ){
                return 0;
            }
            var arrItems = items.split(",")
            return arrItems.length;
        }
    }

    

})();