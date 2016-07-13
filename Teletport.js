//teleport,v1,editted by Baron_Chang 铮琪大人
function newLevel() { homePos = ModPE.readData("home") }//read home 读取home存档
function leaveGame() { ModPE.saveData("home", homePos) }//save home 存入home存档
function procCmd(cmd) {
    if (cmd == "sethome") { homePos = [getPlayerX(), getPlayerY(), getPlayerZ()] };
    if (cmd == "gohome") { setPosition(Player.getEntity(), homePos[0], homePos[1], homePos[2]) };
    if (cmd == "main") { setPosition(Player.getEntity(), 0, 0, 0) }//main function 主函数
}
function useItem(x, y, z, itId, blId, side, itemDamage, blockDamage) {
    if (blId == 77 && Level.getSignText(x, y - 2, z, 0) == "tp") { setPosition(Player.getEntity(), Level.getSignText(x, y - 2, z, 1), Level.getSignText(x, y - 2, z, 2), Level.getSignText(x, y - 2, z, 3)) }
}





