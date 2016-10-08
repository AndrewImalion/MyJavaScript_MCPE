//Building,v2
//ModPE
//@Baron, AllRightReserved

//Essential Functions==============================================================
function putBlock(point, stuff) {
    setTile(point[0], point[1], point[2], stuff[0],stuff[1]);
};

function buildCube(point, stuff, sizes) {
    for (var i = 0; i < sizes[0]; i++) {
        putBlock([point[0] + i, point[1], point[2]], stuff);
        for (var j = 0; j < sizes[1]; j++) {
            putBlock([point[0] + i, point[1] + j, point[2]], stuff);
            for (var k = 0; k < sizes[2]; k++) {
                putBlock([point[0] + i, point[1] + j, point[2] + k], stuff);
            }
        }
    };
    clientMessage("SET BLOCKS ��b" + (sizes[0] * sizes[1] * sizes[2]));
};

function buildVTube(point, stuff, sizes) {//vertical tube
    buildCube(point, stuff, sizes);
    buildCube([point[0] + 1, point[1], point[2] + 1], [0,0], [sizes[0] - 2, sizes[1], sizes[2] - 2]);
};

function buildHTube(point, stuff, sizes) {//horizonal tube
    buildCube(point, stuff, sizes);
    buildCube([point[0] + 1, point[1] + 1, point[2]], [0, 0], [sizes[0] - 2, sizes[1] - 2, sizes[2]]);
};

function putColumn(point, stuff, highth) {
    buildCube(point, stuff, [1, highth, 1]);
    clientMessage("SET A COLUMN HIGHTH IN ��b" + highth);
};

//Structive========================================================================
//TODO:puttree,buildstair
