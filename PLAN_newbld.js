/*Javascript for MCPE
  ============================================
  @BaronChang
  All rights reserved
  
  this js builds different buildings
  
  ============================================*/
  
  //core function=============================
  function putCube(pt, blc, size, orient) {
    if (orient === undefined) { orient = 0 };
    switch (orient) {
        case 0: {
            for (var i = 0; i < size[0]; i++) {
                putBlock([pt[0] + i, pt[1], pt[2]], blc);
                for (var j = 0; j < size[1]; j++) {
                    putBlock([pt[0] + i, pt[1] + j, pt[2]], blc);
                    for (var k = 0; k < size[2]; k++) {
                        putBlock([pt[0] + i, pt[1] + j, pt[2] + k], blc);
                    }
                }
            }
        }; break;
        case 1: putCube([pt[0], pt[1], pt[2] - size[0]], blc, [size[2], size[1], size[0]], 0); break;
        case 2: putCube([pt[0] - size[0], pt[1], pt[2] - size[2]], blc, size, 0); break;
        case 3: putCube([pt[0] - size[2], pt[1], pt[2]], blc, [size[2], size[1], size[0]], 0); break
            //what a fucking talent i am !
        default: print("Error, Illegal orient!"); break;
    };
};
