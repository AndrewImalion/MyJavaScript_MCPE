//Building,v1,
//@BaronChang

var carryingitem = [0, 0];
var compass = 0;

//======================================================================================
function newLevel()
{
    print("Building ver1.0 @BaronChang");
    clientMessage("Welcome to use ¡ìa<BUILDING>");
    //add index of buildings here.
};

function putBlock(point, id, data)
{
    setTile(point[0], point[1], point[2], id, data);
};

function buildCube(point, id, data, sizes)
{
    for (i = 0; i <= sizse[0]; i++) {
        putBlock(point + [sizes[0] - 1, 0, 0], id, data);
        for (j = 0; j <= sizes[1]; j++) {
            putBlock(point + [0, sizes[1] - 1, 0], id, data);
            for (k = 0; k <= sizes[2]; k++) {
                putBlock(point + [0, 0, sizes[2] - 1], id, data);
            }
        }
    }
};

function buildTube(point, id, data, sizes)
{
    buildCube(point, id, data, sizes);
    buildCube(point + [1, 0, 1], 0, 0, sizes + [-2, 0, -2]);
};

function useItem(x, y, z, itemId, blockId, side)
{
    carryingitem[0] = itemId;
    carryingitem[1] = Player.getCarriedItemData();
    //set carried item id,to know what the player is carrying.
    switch (compass) {
        case 0:; break;
        case 1: buildCube([x, y, z], carryingitem[0], carryingitem[1], 8); break;
            //add new buildings here.
    }

};

function procCmd(cmd)
{
    compass = cmd;
    clientMessage("Now,the compass is¡ìc" + compass);
};
