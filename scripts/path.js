class Path {
  constructor(x, y) {
    // this.xLeft = 0;
    // this.yLeft = 0; 
    // this.widthLeft = 150;
    // this.heightLeft = 600;
    // this.color = "green";
    // this.xRight = 350;
    // this.yRight = 0; 
    // this.widthRight = 150;
    // this.heightRight = 600;
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 5;
    this.color = "black";
  }

  paintPath() { //hacemos que el rectangulo baje por la pantalla
    this.y += 1;
  }


}




