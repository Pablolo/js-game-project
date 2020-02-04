class Game {
  constructor(options, player, callback1, callback2, callback3) {
    this.ctx = options.ctx;
    this.rightPerc = options.rightPerc;
    this.passedFailed = options.passedFailed;
    this.canvasHeight = options.canvasHeight;
    this.player = player;
    this.interval = undefined;
    this.pathArray = [];
    this.frames = 0;
    this.timeOut = 0;
    this.paused = false;
    this.gameOver = callback1;
    this.alert = callback2;
    this.alertWhite = callback3;
    this.finalPercentage = 0;
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
    this.pathArray.push(new Path(this.ctx, x, 0)); 
  };
  
  _movePathDown() { 
    this.pathArray.forEach(element => {
      element.move();
      element.draw();
    })
  }

  _generateTurns() {
  let lastItem = this.pathArray[this.pathArray.length - 1];

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
      this.passedFailed.innerHTML = "Congratulations! Coordination test approved.";
    } else {
      this.passedFailed.innerHTML = "You need better reflexes! Coordination test failed :(";
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