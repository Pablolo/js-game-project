class Player {
  constructor() {
    this.x = 240;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "black";
    this.deltaX = 0;
  }

  goLeft() {
    this.x -= 10;
    console.log(this.deltaX);
    let totalDelta = this.x + this.deltaX;
    console.log(totalDelta);

    if (totalDelta < 0) {
      this.deltaX += 10;
      ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
    } else {
      ctx.fillRect(totalDelta, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
    }
  };

  goRight() {
    this.deltaX += 10;
    console.log(this.deltaX);
    let totalDelta = this.x + this.deltaX;
    console.log(totalDelta);

    if (totalDelta > 480) {
      this.deltaX -= 10;
      ctx.fillRect(this.x + this.deltaX, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
    } else {
      ctx.fillRect(totalDelta, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
    }
  };
 
  move() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y += 20, this.width, this.height);
  };
}


