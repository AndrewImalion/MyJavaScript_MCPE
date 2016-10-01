//Chestore,v2
//ModPE
//Baron

//CONSTANT
var CURRENCY=[,];//this will be regarded as legal money by SaleOut
var COM_LIST=[];//commodity list, write your commodity as this:[id,data,price]

//get chest============get the item id,data and count in a slot of chest
function getChest(chest, slot) {
    var result;
    result[0] = Leve.getChestSlot(chest[0], chest[1], chest[2], slot);//the Id of item of chest in slot
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
    for (var i = 0; i < 27; i++) {
        var content;
        content = getChest(chest, i);
        if (content[0] == item[0]
            && content[1] == item[1]) {
            result = result + content[2]
        }
    };
    return result;
};

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
    var com;
    var fee = 0;
    var sum = 0;
    com[0] = Level.getSignText(chest[0], chest[1], chest[2], 0);//commodity Id
    com[1] = Level.getSignText(chest[0], chest[1], chest[2], 1);//commodity Data
    com[2] = Level.getSignText(chest[0], chest[1], chest[2], 2);//commodity Price

    fee = countChest(chest, CURRENCY);//read money
    stuffChest(chest, [0, 0], 0);//clean up this chest
    sum = Math.ceil(fee / com[2]);

    if (sum > 0) {
        setChest(chest, 1, [com[0], com[1]], sum);
        clientMessage("/u00a7aThank You (*^-^*)");
    };
    setChest(chest, 0, CURRENCY, fee % com[2]);
    clientMessage("/u00a7eChange " + "/u00a7b" + fee % com[2]);
};

//buy in===============
function buyIn(chest) {
    var fee = 0;
    for (var i = 0; i < COM_LIST.length; i++) {
        fee = fee + (COM_LIST[i][2] * countChest(chest, [COM_LIST[i][0], COM_LIST[i][1]]));
    };
    if (fee > 0) {
        stuffChest(chest, [0, 0], 0);//clean
        setChest(chest, 0, CURRENCY, fee);
        clientMessage("/u00a7eSummary " + "/u00a7b" + fee);
    }
};

//TODO: hook