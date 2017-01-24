(function(){

'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
    var buyCtrl = this;

    buyCtrl.items = ShoppingListService.getBuyItems();

    buyCtrl.checkOffItem = function(itemIdx){
        ShoppingListService.checkOffItem(itemIdx);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListService.getBoughtItems();
}



function ShoppingListService(){
    
    var service = this;

    var toBuyItems = [
        { name: "cookies", quantity: 3 },
        { name: "chips", quantity: 2 },
        { name: "soda", quantity: 1 },
        { name: "burritos", quantity: 2 },
        { name: "nachos", quantity: 1 }
    ];

    var boughtItems = [];

    service.getBuyItems = function(){
        return toBuyItems;
    };

    service.getBoughtItems = function(){
        return boughtItems;
    };

    service.checkOffItem = function(itemIndex){
        var source = toBuyItems[itemIndex];
        toBuyItems.splice(itemIndex, 1);
        boughtItems.push(source);
    };




}

})();