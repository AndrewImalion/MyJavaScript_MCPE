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
    //set carried item id,to know what the player is carrying. this shall depends the type of some buildings.
    switch (compass)
    {
        case 0:; break;
        case 1: {
            putBlock([x + 1, y + 1, z + 1], itemId, itemData);
            clientMessage("§eFINISHED BUILDING 1");
            break;
        }
            //call new buildings here.
    }
    
};

function putBlock(point, id, data)
{
    setTile(point[0], point[1], point[2], id, data);
};

function putColumn(point, id, data, highth) {
    buildCube(point, id, data, [1, highth, 1]);
    clientMessage("SET A COLUMN HIGHTH IN §b" + highth);
}

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
    buildCube([point[0]+1,point[1],point[2]+1], 0, 0, [sizes[0]-2,sizes[1],sizes[2]-2]);
};

function procCmd(cmd)
{
    compass = Number(cmd);
    clientMessage("Now, the compass is§c " + compass);
};

//======================================================================================
//declare new buildings under.
