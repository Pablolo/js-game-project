class Player {
  constructor() {
    this.x = 240;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "green";
    this.deltaX = 0;
  }

  goLeft() {
    this.deltaX -= 10;
    console.log(this.deltaX);
    ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
  };

  goRight() {
    this.deltaX += 10;
    console.log(this.deltaX);
    ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
  };
 
  // move();

}


