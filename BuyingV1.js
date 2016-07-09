//Buying,Baron_Chang,v1
//
//箱子下方放置一个红石灯，红石灯下2格放置告示牌
//  告示牌第一行写“buy”，第二行写要出卖的商品id，第三行写价格，第四行写价格能购买的数量
//然后往箱子里放绿宝石，点击亮着的红石灯就能实现
//******************************************************************************
function useItem(x, y, z, itId, blId, side, itemDamage, blockDamage) {
    if (blId == 124 && "buy" == Level.getSignText(x, y - 2, z, 0)) {
        var price = Level.getSignText(x, y - 2, z, 2);
        var amount = Level.getSignText(x, y - 2, z, 3);
        var comcl = Level.getSignText(x, y - 2, z, 1);
        var bill = countChest(x, y + 1, z);//apply constructive function
        if (Math.floor(bill / price) > 0) {
            Level.setChestSlot(x, y + 1, z, 0, comcl, 0, amount * Math.floor(bill / price));
            clientMessage("§a谢谢土豪惠顾!。(*^_^*)。")
        }else{clientMessage("§a穷B你钱不够～(-_-)")}
    }
}//main function
function countChest(chx, chy, chz) {
    var amount = 0;
    for (var ct = 0; ct < 27; ct++) {
        if (Level.getChestSlot(chx, chy, chz, ct) == 388) { amount = amount + Level.getChestSlotCount(chx, chy, chz, ct) };
        Level.setChestSlot(chx, chy, chz, ct, 0, 0, 0)
    };
    return amount;
}//constructive function,which can count the tatal summary of Emerald of a chest
