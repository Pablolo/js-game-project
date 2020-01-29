class Player {
  constructor() {
    this.x = 240;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "white";
  }

  goLeft() {
    this.x -= 10;
    if (this.x < 0) {
      this.x += 10;
    }
  };

  goRight() {
    this.x += 10;
    if (this.x > 480) { //hacerlo dinamico para que coja canvas.width (deberas pasarlo al constructor)
      this.x -= 10;
    }
  };
}


