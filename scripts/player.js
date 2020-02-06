class Player {
  constructor(x, y, canvasWidth) {
    this.x = x;
    this.y = y; 
    this.width = 20;
    this.height = 20;
    this.color = "#f2ca26";
    this.canvasWidth = canvasWidth;
  }

  goLeft() {
    this.x -= 5;
    if (this.x < 0) {
      this.x += 10;
    }
  };

  goRight() {
    this.x += 5;
    if (this.x > (this.canvasWidth - this.width)) { 
      this.x -= 10;
    }
  };
}


