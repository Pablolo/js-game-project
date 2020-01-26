class Player {
  constructor() {
    this.x = 250;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "black";
    this.deltaX = 0;
  }

  goLeft() {
    ctx.clearRect(0, 0, 500, 600);
    this.deltaX -= 10;
    console.log(this.deltaX);
    ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
  };

  goRight() {
    ctx.clearRect(0, 0, 500, 600);
    this.deltaX += 10;
    console.log(this.deltaX);
    ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
  };
 
  // move();

}


