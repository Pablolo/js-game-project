class Game {
  constructor(options, player) {
    this.ctx = options.ctx;
    this.alertRed = options.alertRed;
    this.canvasHeight = options.canvasHeight;
    this.player = player;
    this.interval = undefined;
    this.pathArray = [];
    this.frames = 0;
    this.milliSeconds = 0;
    this.timeOut = 0;
    this.paused = false;
  }

  _drawPlayer() {
    this.ctx.fillStyle = this.player.color;  
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  };

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: 
          this.player.goLeft();
          break;
        case 39: 
          this.player.goRight();
          break;
        case 32: // space bar 
          this.pause();
          this.paused = !this.paused;
          break;
      }
      e.preventDefault();
    });
  };

  _startLinePath() {
    for (let i = 0; i < 600; i++) { 
      this.pathArray.push(new Path(this.ctx, 210, i));
    } 
  }

  _generatePath(x) {  
    this.pathArray.push(new Path(this.ctx, x, 0)); // zero because starts on top
  };
  
  _movePathDown() { 
    this.pathArray.forEach(element => {
      element.move();
      element.draw();
    })
  }

  _generateTurns() {
  let lastItem = this.pathArray[this.pathArray.length - 1];

  if (this.frames > 0 && this.frames < 160) {  // giro derecha 
    this._generatePath(lastItem.x += 1); // 
  } else if (this.frames > 155 && this.frames < 220) { // recto 
    this._generatePath(lastItem.x);
  } else if (this.frames > 215 && this.frames < 490) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 485 && this.frames < 510) { // recto 
    this._generatePath(lastItem.x);
  } else if (this.frames > 505 && this.frames < 700) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 695 && this.frames < 795) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 790 && this.frames < 880) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 875 && this.frames < 1020) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 1015 && this.frames < 1290) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 1285 && this.frames < 1350) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 1345 && this.frames < 1390) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 1385 && this.frames < 1540) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 1535 && this.frames < 1685) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 1680 && this.frames < 1760) { // recto 
    this._generatePath(lastItem.x); 
  } 
  // else {
  //   this.frames = 0;
  // }
  // } else {
  //   this._generatePath(170); // esta es la linea recta de enmedio
  // }
}

  _deletePath() {
    for (let i = 0; i < this.pathArray.length; i++) {
      if (this.pathArray[0].y >= this.canvasHeight) {
        this.pathArray.shift();
      } 
    }
  }

  _checkCollision() {
    this.pathArray.forEach(element => {
      if (element.y > 350 && element.y < 370) {
        if (this.player.x < element.x || this.player.x + this.player.width > element.x + element.width) { 
          this.timeOut++;
        } 
      }
    })
    console.log(this.timeOut);
  }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    this.frames += 1;
    this.milliSeconds += 1;
    // clean
    this._cleanScreen();
    // draw
    this._movePathDown();
    this._deletePath();
    this._drawPlayer(); 
    this._generateTurns();
    this._checkCollision();

    // this._checkTimeOut();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  // _checkTimeOut() { //calculate % of time out of the way
  //   console.log(this.timeOut / this.milliSeconds);
  // }

  pause() {
    if (!this.paused) {
      window.cancelAnimationFrame(this.interval);
    } else if (this.paused) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  };

  // gameOver();

  start() {
    this._assignControlsToKeys();
    this._startLinePath();
    console.log(this.alertRed);
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}