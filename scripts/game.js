class Game {
  constructor(options, callback1, callback2, callback3) {
    this.ctx = options.ctx;
    this.rightPerc = options.rightPerc;
    this.passedFailed = options.passedFailed;
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.playerL = new Player(23, 65, this.canvasWidth);
    this.playerR = new Player(240, 360, this.canvasWidth);
    this.interval = undefined;
    this.leftPathArray = [];
    this.rightPathArray = [];
    this.frames = 0;
    this.timeOut = 0;
    this.paused = false;
    this.gameOver = callback1;
    this.alert = callback2;
    this.alertWhite = callback3;
    this.finalPercentage = 0;
  }

  _drawPlayer() {
    this.ctx.fillStyle = this.playerR.color;  
    this.ctx.fillRect(this.playerR.x, this.playerR.y, this.playerR.width, this.playerR.height);
  };

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: 
          this.playerR.goLeft();
          break;
        case 39: 
          this.playerR.goRight();
          break;
        case 32: // space bar 
          this.pause();
          break;
      }
      e.preventDefault();
    });
  };

  _startLinePath() {
    for (let i = 0; i < 600; i++) { 
      this.rightPathArray.push(new Path(this.ctx, 210, i));
    } 
  }

  _generatePath(x) {  
    this.rightPathArray.push(new Path(this.ctx, x, 0)); 
  };
  
  _movePathDown() { 
    this.rightPathArray.forEach(element => {
      element.move();
      element.draw();
    })
  }

  _generateTurns() {
  let lastItem = this.rightPathArray[this.rightPathArray.length - 1];

  if (this.frames >= 0 && this.frames < 160) {  // giro derecha 
    this._generatePath(lastItem.x += 1); 
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
  } else if (this.frames > 1680 && this.frames < 1850) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames == 1851) {
    this._resultScreen();
  }
}

  _resultScreen() {
    window.cancelAnimationFrame(this.interval);
    this.gameOver();
    this._checkTimeOut(this.timeOut);
  }

  _deletePath() {
    for (let i = 0; i < this.rightPathArray.length; i++) {
      if (this.rightPathArray[0].y >= this.canvasHeight) {
        this.rightPathArray.shift();
      } 
    }
  }

  _checkCollision() {
    this.rightPathArray.forEach(element => {
      if (element.y > 350 && element.y < 370) {
        if (this.player.x < element.x || this.player.x + this.player.width > element.x + element.width) { 
          this.timeOut++;
          this.alert();
        } else {
          this.alertWhite();
        }
      }
    })
  }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    this.frames += 1; 
    // clean
    this._cleanScreen();
    // draw
    this._movePathDown();
    this._deletePath();
    this._drawPlayer(); 
    this._generateTurns();
    this._checkCollision();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  _checkTimeOut(timeOut) { // calculate % of time out of the way (9800 max. timeout)
    this.finalPercentage = ((timeOut / 9800) * 100).toFixed(1);
    console.log("% final:", this.finalPercentage);
    this._printPercentage();
    this._passedOrFailed();
  }

  _printPercentage() {
    this.rightPerc.innerHTML = `${this.finalPercentage} %`;
  }

  _passedOrFailed() {
    if (this.finalPercentage < 10) {
      this.passedFailed.innerHTML = "Congratulations!<br> Coordination test approved.";
    } else {
      this.passedFailed.innerHTML = "You will need better reflexes!<br> Coordination test failed :(";
    }
  }

  pause() {
    this.paused = !this.paused;  
    if (this.paused) {
      window.cancelAnimationFrame(this.interval);
    } else {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  };

  start() {
    this._assignControlsToKeys();
    this._startLinePath();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}