//Building,v1,
//@BaronChang

var carryingitem = [0, 0];
var compass = 0;

//======================================================================================
function newLevel()
{
    print("ver1.0 @BaronChang");
    clientMessage("Welcome to use §a<BUILDING>");
    //add index of buildings here.
};

function useItem(x, y, z, itemId, blockId, side, itemData, blockData) {
    carryingitem[0] = itemId;
    carryingitem[1] = itemData;
    //set carried item id,to know what the player is carrying.
    if (compass == 1)
    {
        putBlock([x + 1, y + 1, z + 1], itemId, itemData);
        clientMessage("§eFINISHED BUILDING 1");
    };
    //call new buildings here
    if (compass == 2) {
        buildCube([x, y, z], itemId, itemData, [4, 4, 4]);
        clientMessage("§eFINISHED BUILDING 2");
    }
};

function putBlock(point, id, data)
{
    setTile(point[0], point[1], point[2], id, data);
};

function buildCube(point, id, data, sizes)
{
    for (var i = 0; i <sizes[0]; i++) {
        putBlock([point[0] + i, point[1], point[2]], id, data);
        for (var j = 0; j < sizes[1]; j++) {
            putBlock([point[0] + i, point[1] + j, point[2]], id, data);
            for (var k = 0; k < sizes[2]; k++) {
                putBlock([point[0] + i, point[1] + j, point[2] + k], id, data);
            }
        }
    };
    clientMessage("SET BLOCKS §b"+(sizes[0]*sizes[1]*sizes[2]));
};

function buildTube(point, id, data, sizes)
{
    buildCube(point, id, data, sizes);
    buildCube(tripelArriesAdd(point ,[1, 0, 1]), 0, 0, sizes + [-2, 0, -2]);
};

function procCmd(cmd)
{
    compass = Number(cmd);
    clientMessage("Now, the compass is§c " + compass);
};
