class Player {
  constructor() {
    this.x = 250;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "black";
  }

  goLeft() {
    ctx.clearRect(0, 0, 500, 600);
  };

  goRight() {
    ctx.clearRect(0, 0, 500, 600);
  };

  // move();

}


