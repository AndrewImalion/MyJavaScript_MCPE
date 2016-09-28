//NewbieHouse
//这是Building.js的一个片段
//需要依赖Building的其他函数

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
};