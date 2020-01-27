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
 
  // move();

}


