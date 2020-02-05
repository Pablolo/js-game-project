class Path {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 5;
    this.color = "#7f8fa6";
    this.intervalId = undefined;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y = this.y + 4;
  }
}





