//Buiding_v1
//Pchouuse
//this is a part of <Building_v1> ,shall relay on it.

function buildPCHouse(point) {
    //Floor
    buildCube(point, 35, 6, [10, 1, 8]);//35-6 is pink-wool

    //Main
    buildTube([point[0], point[1] + 1, point[2]], 155, 0, [10, 3, 8]);//115 is quartz
    buildCube([point[0], point[1] + 1, point[2]], 0, 0, [1, 3, 1]);
    buildCube([point[0] + 9, point[1] + 1, point[2]], 0, 0, [1, 3, 1]);
    buildCube([point[0], point[1] + 1, point[2] + 7], 0, 0, [1, 3, 1]);
    buildCube([point[0] + 9, point[1] + 1, point[2] + 7], 0, 0, [1, 3, 1]);//0 is the air.remove four edges
    buildCube([point[0] + 3, point[1] + 1, point[2]], 0, 0, [1, 2, 1]);
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
    clientMessage("¡ìeFINISHED BUILDING <Pc House>");
};

