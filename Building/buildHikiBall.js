//HikingBall
//这是Building的片段
//需要依赖building的其他函数实现
//这个设计灵感来自《多啦A梦》的露营灯

function buildHikiBall(point, envir) {
    //environment
    var s_main;
    var s_pillar;
    var ui_style;
    switch (envir) {
        case 2: { s_main = [35, 13]; s_pillar = [5, 5]; ui_style = "(forest type)"; break; }//glass block
        case 12: { s_main = [24, 2]; s_pillar = [159, 1]; ui_style = "(desert type)"; break; }//sand
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
};