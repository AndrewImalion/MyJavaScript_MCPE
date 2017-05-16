/*Javascript for MCPE
  ============================================
  @BaronChang
  All rights reserved
  
  this js builds different buildings
  
  ============================================*/
  
  //core function=============================
  function putBlock(pt,blc)  /*we use a 3dime arry to implemize a position as this[x,y,y]
                               use a 2dime arry to implemize a type of block as this [blockId,blockData]*/
  {
    setTile(pt[0],pt[1],pt[2],blc[0],blc[1]);
  };
  
  function putCube(pt,blc,size,orient)
  {
    if(orient===undefined){orient=0};
    
  }
