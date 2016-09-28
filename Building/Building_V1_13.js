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
        case 2: {
            clientMessage("§eTo Build PcHouse");
            buildPCHouse([x, y, z]);
            break;
        }
        case 3: {
            clientMessage("§eTo Build NewbiesHouse");
            buildNewbieHouse([x, y, z], itemData);
            break;
        }
        case 4: {
            clientMessage("§eTo Build HikingBall");
            buildHikiBall([x, y, z], blockId);
            break;
        }
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

//pchouse======
function buildPCHouse(point) {
    //Floor
    buildCube(point, 35, 6, [10, 1, 8]);//35-6 is pink-wool

    //Main
    buildTube([point[0], point[1] + 1, point[2]], 155, 0, [10, 3, 8]);//115 is quartz
    buildCube([point[0], point[1] + 1, point[2]], 0, 0, [1, 3, 1]);
    buildCube([point[0] + 9, point[1] + 1, point[2]], 0, 0, [1, 3, 1]);
    buildCube([point[0], point[1] + 1, point[2] + 7], 0, 0, [1, 3, 1]);
    buildCube([point[0] + 9, point[1] + 1, point[2] + 7], 0, 0, [1, 3, 1]);//0 is the air.remove four edges
    buildCube([point[0] + 3, point[1] + 1, point[2]], 0, 0,[1, 2, 1]);
    putBlock([point[0] + 3, point[1] + 1, point[2]], 71, 0);//71 is iron-door.
    buildCube([point[0] + 5, point[1] + 2, point[2]], 20, 0, [3, 2, 1]);//front window
    buildCube([point[0], point[1] + 2, point[2] + 3], 20, 0, [1, 2, 1]);//left window
    buildCube([point[0] + 9, point[1] + 2, point[2] + 3], 20, 0, [1, 2, 1]);//ringt window. 20 is glasss

    //Ceil
    buildCube([point[0], point[1] + 4, point[2]], 35, 14, [10, 1, 8]);
    buildCube([point[0] + 2, point[1] + 5, point[2]], 35, 14, [6, 1, 8]);
    buildCube([point[0] + 4, point[1] + 6, point[2]], 35, 14, [2, 1, 8]);//35-14 is red-wool

    //TODO: inner decoratation

    //UI
    clientMessage("§eFINISHED BUILDING <Pc House>");
};//compass 2

//newbiehouse==
function buildNewbieHouse(point, ref) {
    //refrence
    var s_floor;//stuff of floor
    var s_main;//stuff of main structure
    var s_ceil;//stuff of ceil
    var ui_style;//to tell the user information of the house style
    switch (ref) {
        case 3: { s_floor = [155, 9]; s_main = [5, 2]; s_ceil = [35, 3]; ui_style = "(Grecian)"; break; }//blue-wool
        case 14: { s_floor = [1, 6]; s_main = [5, 0]; s_ceil = [35, 14]; ui_style = "(American)"; break; }//red-wool
        case 4: { s_floor = [45, 0]; s_main = [5, 1]; s_ceil = [35, 4]; ui_style = "(Noble)"; break; }//yellow-wool
        case 5: { s_floor = [159, 15]; s_main = [5, 5]; s_ceil = [35, 5]; ui_style = "(Gothic)"; break; }//green-wool
            //different style of house
    };

    //Floor
    buildCube(point, s_floor[0], s_floor[1], [5, 1, 5]);

    //Main
    buildTube([point[0], point[1] + 1, point[2]], s_main[0], s_main[1], [5, 3, 5]);//main structure
    putColumn([point[0], point[1] + 2, point[2] + 2], 20, 0, 2);
    putColumn([point[0] + 4, point[1] + 2, point[2] + 2], 20, 0, 2);
    putColumn([point[0] + 3, point[1] + 2, point[2] + 4], 20, 0, 2);//3 windows
    putColumn([point[0] + 1, point[1] + 1, point[2] + 4], 0, 0, 2);
    putBlock([point[0] + 1, point[1] + 2, point[2] + 4], 197, 8);
    putBlock([point[0] + 1, point[1] + 1, point[2] + 4], 197, 3);//door

    //Ceil
    buildTube([point[0], point[1] + 4, point[2]], s_ceil[0], s_ceil[1], [5, 1, 5]);
    buildCube([point[0] + 1, point[1] + 5, point[2] + 1], s_ceil[0], s_ceil[1], [3, 1, 3]);

    //InnerDecoration
    putBlock([point[0] + 1, point[1] + 1, point[2] + 1], 26, 10);
    putBlock([point[0] + 1, point[1] + 1, point[2] + 2], 26, 2);//bed
    putBlock([point[0] + 3, point[1] + 1, point[2] + 1], 58, 0);//workingtable
    putBlock([point[0] + 3, point[1] + 1, point[2] + 2], 54, 4);//chest

    //TODO: intialized source

    //UI
    clientMessage("§eFINISHED BUILDING <Newbie`s House>" + ui_style);
};//compass 3

//hikingball===
function buildHikiBall(point,envir) {
    //environment
    var s_main;
    var s_pillar;
    var ui_style;
    switch (envir) {
        case 2: { s_main = [35, 13]; s_pillar = [5, 5]; ui_style = "(forest type)"; break; }//glass block
        case 12: { s_main = [24, 2]; s_pillar = [159,1]; ui_style = "(desert type)"; break; }//sand
    };

    //Main
    buildCube([point[0] - 2, point[1] + 16, point[2] - 2], s_main[0], s_main[1], [5, 1, 5]);//bottom
    buildCube([point[0] - 2, point[1] + 17, point[2] + 3], s_main[0], s_main[1], [5, 3, 1]);//front wall
    buildCube([point[0] - 2, point[1] + 17, point[2] - 3], s_main[0], s_main[1], [5, 3, 1]);//behind wall
    buildCube([point[0] - 3, point[1] + 17, point[2] - 2], s_main[0], s_main[1], [1, 3, 5]);
    buildCube([point[0] + 3, point[1] + 17, point[2] - 2], s_main[0], s_main[1], [1, 3, 5]);//left and right walls
    buildTube([point[0] - 2, point[1] + 20, point[2] - 2], s_main[0], s_main[1], [5, 1, 5]);
    buildCube([point[0] - 1, point[1] + 21, point[2] - 1], s_main[0], s_main[1], [3, 1, 3]);//ceil
    buildCube([point[0] - 1, point[1] + 18, point[2] + 3], 96, 11, [3, 1, 1]);//windows, use trap-door
    buildCube([point[0] - 1, point[1] + 18, point[2] - 3], 96, 10, [3, 1, 1]);//windows, use trap-door

    //Pillar
    buildTube([point[0] - 1, point[1] + 1, point[2] - 1], s_pillar[0], s_pillar[1], [3, 16, 3]);
    putColumn([point[0], point[1] + 1, point[2] + 1], 0, 0, 2);//gate
    putColumn([point[0], point[1] + 1, point[2]], 65, 3, 16);//LADDER

    //InnerDecoratation
    putBlock([point[0] + 2, point[1] + 17, point[2] - 1], 58, 0);//workingtable
    putBlock([point[0] + 2, point[1] + 17, point[2]], 54, 4);//chest
    putBlock([point[0] + 2, point[1] + 17, point[2] + 1], 61, 4);//FURNACE
    putBlock([point[0] - 2, point[1] + 17, point[2] - 2], 26, 10);
    putBlock([point[0] - 2, point[1] + 17, point[2] - 1], 26, 2);//bed

    //TODO: items

    //UI
    clientMessage("§eFINISHED BUILDING <Hiking Ball>" + ui_style);
};//compass 4