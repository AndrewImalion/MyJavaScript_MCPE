//Building,v1,
//@BaronChang

var carryingitem = [0, 0];
var compass = 0;

//======================================================================================
function newLevel()
{
    print("Building ver1.0 @BaronChang");
    clientMessage("Welcome to use <BUILDING>");
    //add index of buildings here.
};

function tripelArriesAdd(adding_arry,added_arry)
{
    result_arry = [, , ];
    result_arry[0] = adding_arry[0] + added_arry[0];
    result_arry[1] = adding_arry[1] + added_arry[1];
    result_arry[2] = adding_arry[2] + added_arry[2];
    return result_arry;
};

function putBlock(point, id, data)
{
    setTile(point[0], point[1], point[2], id, data);
};

function buildCube(point, id, data, sizes)
{
    for (i = 0; i <= sizse[0]; i++) {
        putBlock(tripelArriesAdd( point , [sizes[0] - 1, 0, 0]), id, data);
        for (j = 0; j <= sizes[1]; j++) {
            putBlock(tripelArriesAdd(point , [0, sizes[1] - 1, 0]), id, data);
            for (k = 0; k <= sizes[2]; k++) {
                putBlock(tripelArriesAdd(point ,[0, 0, sizes[2] - 1]), id, data);
            }
        }
    }
};

function buildTube(point, id, data, sizes)
{
    buildCube(point, id, data, sizes);
    buildCube(tripelArriesAdd(point ,[1, 0, 1]), 0, 0, sizes + [-2, 0, -2]);
};

function useItem(x, y, z, itemId, blockId, side, itemData, blockData)
{
    carryingitem[0] = itemId;
    carryingitem[1] = itemData;
    //set carried item id,to know what the player is carrying.
    if (compass == 1) {
        putBlock([x + 1, y + 1, z + 1], itemId, itemData);
        buildCube([x, y, z], itemId, itemData, [2, 2, 2]);
        clientMessage("FINISHED BUILDING 1");
    };
    //call new buildings here
};

function procCmd(cmd)
{
    compass = Number(cmd);
    clientMessage("Now, the compass is " + compass);
};
