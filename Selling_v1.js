//Selling-V1
//version1.0
//箱子收购物品换成绿宝石
//@Baron Chang铮琪大人
//AllRingtsReserved
//2016.6
//***********************************

var prcmm = [];//initializePricemenu
prcmm[0] = [388, 0, 1, "绿宝石"];
prcmm[1] = [352, 0, 2, "骨头"];
prcmm[2] = [367, 0, 3, "腐肉"];//在这里添加初始商品目录

function useItem(x, y, z, itId, blId, side, itemDamage, blockDamage) {
    if (blId == 124 && Level.getSignText(x, y - 2, z, 0) == "sell") {
        var len = prcmm.length;
        for (var slt = 0; slt < 27; slt++) {
            for (var prc = 0; prc < len; prc++) {
                if (prcmm[prc][0] == Level.getChestSlot(x, y + 1, z, slt) && prcmm[prc][1] == Level.getChestSlotData(x, y + 1, z, slt)) {
                    var gdsum = Level.getChestSlotCount(x, y + 1, z, slt);
                    Level.setChestSlot(x, y + 1, z, slt, 388, 0, prcmm[prc][2] * gdsum);
                    clientMessage("§a收购" + prcmm[prc][3] + "*" + gdsum + "个");
                }
            }
        }
    }
};//mainFunction
function procCmd(cmd) {
    if (cmd == "newcmml") 
    {   //手持商品输入命令添加自定义商品，数量就是单价
        var cmid = Player.getCarriedItem();
        var cmsp = Player.getCarriedItemData();
        var cmprc = Player.getCarriedItemCount();
        var cmtg = "§e自定义商品";
        prcmm.push([cmid, cmsp, cmprc, cmtg]);
        print("new commercial added")
    };
    if (cmd == "seepricemenu") 
    {   //输入命令查看全部的商品目录
        for (var ct = 0, len = prcmm.length; ct < len; ct++) { clientMessage("menuNo." + ct +"  "+ prcmm[ct][3]+"   收购价"+prcmm[ct][2]) }
    };
    if (cmd == "reformpricemenu") {
        prcmm = [];
        print("pricemenu reformed")
    }
}//settingPricemenu





