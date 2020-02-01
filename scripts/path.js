class Path {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 160;
    this.height = 5;
    this.color = "gray";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    // this.y++; //cambiar para aumentar velocidad, hacer un if dependiendo de la velocity que se le pase a move()
    this.y = this.y + 4;
  }

}




