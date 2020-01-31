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
    this.y++;
  }

  // turnRight() {
  //   this.width += 1;
  //   //this.x += 1;
  // }

}


// _generateTurns() {
//   let start = 170;
//   let difference = 70;
//   let firstTurn = difference + this.frames;

//   if (this.frames > 100 && this.frames < 260) {  // giro a la derecha 
//     this._generatePath(firstTurn); 
//   } else if (this.frames > 255 && this.frames < 470) { // recto 
//     this._generatePath(260 + difference);
//   } else if (this.frames > 465 && this.frames < 690) { // giro izquierda 
//     this._generatePath(470 + 260 + difference - this.frames); // 800 - this.frames
//   } else if (this.frames > 685 && this.frames < 870) { // recto 
//     this._generatePath(870 - 690 - difference); // 110
//   } else if (this.frames > 865 && this.frames < 1190) { // giro izquierda 
//     this._generatePath(870 + 110 + this.frames); //980
//   } else {
//     this._generatePath(start); // esta es la linea recta enmedio
//   }
// }


