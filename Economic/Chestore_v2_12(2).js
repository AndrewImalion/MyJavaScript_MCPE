//Chestore,v2
//ModPE
//Baron

//CONSTANT
var CURRENCY=[388,0/*Emerald*/];//this will be regarded as legal money by SaleOut
var COM_LIST = [[367, 0, 32/*rotten flesh*/],
                [391, 0, 4/*carrot*/],
                [296, 0, 2/*wheat*/],
                [340, 0, 64/*book*/]

               ];//commodity list, write your commodity as this:[id,data,price]

//get chest============get the item id,data and count in a slot of chest
function getChest(chest, slot) {
    var result=[,,];
    result[0] = Level.getChestSlot(chest[0], chest[1], chest[2], slot);//the Id of item of chest in slot
    result[1] = Level.getChestSlotData(chest[0], chest[1], chest[2], slot);//the Data 
    result[2] = Level.getChestSlotCount(chest[0], chest[1], chest[2], slot);//the count

    return result;
};//pre:position of chest,slot
//pos:[id,data,count]

//set chest============set item in chest
function setChest(chest, slot, item, count) {
    Level.setChestSlot(chest[0], chest[1], chest[2], slot, item[0], item[1], count);
};

//count chest==========count how many items in a chest
function countChest(chest, item) {
    var result = 0;
    var id;
    var dt;
    var ct;
    for (var i = 0; i < 27; i++) {
        id = Level.getChestSlot(chest[0], chest[1], chest[2], i);
        dt = Level.getChestSlotData(chest[0], chest[1], chest[2], i);
        if (id == item[0] && dt == item[1]) {
            ct = Level.getChestSlotCount(chest[0], chest[1], chest[2], i);
            result = result + ct
        }
    };
    return result;
};//TODO:fixthis

//stuff chest===========fill chest up with item,each solt in count
function stuffChest(chest, item, count) {
    for (var i = 0; i < 27; i++) {
        setChest(chest, i, item, count)
    }
};

//=================================================================================
//main

//sale out=============
function saleOut(chest) {
    var com=[,,];
    var fee = 0;
    var sum = 0;
    com[0] = Level.getSignText(chest[0], chest[1]-2, chest[2], 0);//commodity Id
    com[1] = Level.getSignText(chest[0], chest[1]-2, chest[2], 1);//commodity Data
    com[2] = Level.getSignText(chest[0], chest[1]-2, chest[2], 2);//commodity Price
    fee = countChest(chest, CURRENCY);//read money
    stuffChest(chest, [0, 0], 0);//clean up this chest
    sum = Math.floor(fee / com[2]);
    if (sum > 0) {
        setChest(chest, 1, [com[0], com[1]], sum);
        clientMessage("¡ìaThank You (*^-^*)");
        clientMessage("¡ìbCharge" + "¡ìe " + fee);
        clientMessage("¡ìbSale  " + "¡ìe " + sum);
    };
    if (fee % com[2] > 0) {
        setChest(chest, 0, CURRENCY, fee % com[2]);
        clientMessage("¡ìbChange " + "¡ìe" + fee % com[2])
    }
};

//buy in===============
function buyIn(chest) {
    var fee = 0;
    var listlgth = COM_LIST.length;
    for (var i = 0; i < listlgth; i++) {
        fee = fee + (COM_LIST[i][2] * countChest(chest, [COM_LIST[i][0], COM_LIST[i][1]]));
    };
    if (fee > 0) {
        stuffChest(chest, [0, 0], 0);//clean
        setChest(chest, 0, CURRENCY, fee);
        clientMessage("¡ìaSummary " + "¡ìe" + fee);
    }
};

//hook
function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
    if (blockId == 54) {
        if ("sale" == Level.getSignText(x, y - 2, z, 3)) { saleOut([x, y , z]) };
        if ("buy" == Level.getSignText(x, y - 2, z, 3)) { buyIn([x, y , z]) };
    }
};