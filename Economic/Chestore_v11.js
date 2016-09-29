//===============================
//这个js有一个尚未解决的bug
//the client shuts down when pick a [54,]

//Chestore,v1
//JavaScript
//@Baron
//to set a store that can sale and buy something in MCPE
//set a chest,then below 2 blcks of it, set a sign which says as under regularation

//gobal
var currency = [388,0 ];//use this as money,[id,data];[388,0]is emerald
var com_list = [/*set commercial list here as [id,data,price]*/];

//count the amount of item in chest=====
function countInChest(pt, item) {   //pt is the position of a chest ,as[x,y,z]
    var statistic = 0;
    for (var i = 0; i < 27; i++) {
        if (Level.getChestSlot(pt[0], pt[1], pt[2], i) == item[0]
           && Level.getChestSlotData(pt[0], pt[1], pt[2], i) == item[1]) {
            statistic = statistic + Level.getChestSlotCount(pt[0], pt[1], pt[2], i);
        }
    };
    return statistic;
};

//fill up the chest with item===========
function fillUpChest(pt, item, amount) {
    for (var i = 0; i < 27; i++) {
        Level.setChestSlot(pt[0], pt[1], pt[2], i, item[0], item[1], amount);
    }
};

//selling==========================================================================
function saleOut(pt) {
    var com=[];//commodity, [0]is Id,[1]is Data,[2]is price
    var sum = 0;
    var fee = 0;
    for (var i = 0; i < 3; i++) {
        com[i] = Level.getSignText(pt[0], pt[1] - 2, pt[2], i)
    };      //commodity, [0]is Id,[1]is Data,[2]is price
    fee = fee + countInChest(pt, currency);
    fillUpChest(pt, [0, 0], 0);
    sum = sum + Math.floor(fee / com[2]);
    Level.setChestSlot(pt[0], pt[1], pt[2], 0, com[0], com[1], sum);
    Level.setChestSlot(pt[0], pt[1], pt[2], 1, currency[0], currency[1], (fee % com[2]));
};

//buying===========================================================================
function purchaseIn(pt) {
    var fee = 0;
    for (var i = 0; i < com_list.length; i++) {//this is efficient when length<27
        fee = fee + (com_list[i][2] * countInChest(pt, com_list[i]))
    };
    fillUpChest(pt, [0, 0], 0);
    Level.setChestSlot(pt[0], pt[1], pt[2], 0, currency[0], currency[1], fee);
};

//hook=============================================================================
function useItem(x, y, z, itemId, blockId, side) {
    if (blockId == 54/*54 is the chest*/
        &&  Number(Level.getSignText(x, y, z, 3/*the last line of a sign*/)) < 2) {
        var buyOrSale = Level.getSignText(x, y, z, 3);//write 0 or 1 at last line of the sign 
        switch (buyOrSale) {
            case 0: { saleOut([x, y, z]); break; }
            case 1: { purchaseIn([x, y, z]); break; }
        }
    }
};
