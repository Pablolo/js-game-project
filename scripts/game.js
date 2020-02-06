class Game {
  constructor(options, callback1, callback2, callback3) {
    this.ctx = options.ctx;
    this.rightPerc = options.rightPerc;
    this.passedFailed = options.passedFailed;
    this.canvasWidth = options.canvasWidth;
    this.canvasHeight = options.canvasHeight;
    this.playerL = new Player(240, 360, this.canvasWidth / 2);
    this.playerR = new Player(970, 360, this.canvasWidth);
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

  _drawPlayer(player) {
    this.ctx.fillStyle = player.color;  
    this.ctx.fillRect(player.x, player.y, player.width, player.height);
  };

  _assignControlsToKeysL() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 65: 
          this.playerL.goLeft();
          break;
        case 68: 
          this.playerL.goRight();
          break;
        case 32: // space bar 
          this.pause();
          break;
      }
      e.preventDefault();
    });
  };

  _assignControlsToKeysR() {
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
      this.leftPathArray.push(new Path(this.ctx, 210, i));
      this.rightPathArray.push(new Path(this.ctx, 810, i))
    } 
  }

  _generatePathL(x) {  
    this.leftPathArray.push(new Path(this.ctx, x, 0)); 
  };

  _generatePathR(x) {  
    this.rightPathArray.push(new Path(this.ctx, x, 0)); 
  };
  
  _movePathDown(array) { 
    array.forEach(element => {
      element.move();
      element.draw();
    })
  }

  _generateTurnsL() {
  let lastItem = this.leftPathArray[this.leftPathArray.length - 1];

  if (this.frames >= 0 && this.frames < 160) {  // giro derecha 
    this._generatePathL(lastItem.x += 1); 
  } else if (this.frames > 155 && this.frames < 220) { // recto 
    this._generatePathL(lastItem.x);
  } else if (this.frames > 215 && this.frames < 490) { // giro izquierda 
    this._generatePathL(lastItem.x -= 1); 
  } else if (this.frames > 485 && this.frames < 510) { // recto 
    this._generatePathL(lastItem.x);
  } else if (this.frames > 505 && this.frames < 700) { // giro derecha 
    this._generatePathL(lastItem.x += 1); 
  } else if (this.frames > 695 && this.frames < 795) { // recto 
    this._generatePathL(lastItem.x); 
  } else if (this.frames > 790 && this.frames < 880) { // giro derecha 
    this._generatePathL(lastItem.x += 1); 
  } else if (this.frames > 875 && this.frames < 1020) { // recto 
    this._generatePathL(lastItem.x); 
  } else if (this.frames > 1015 && this.frames < 1290) { // giro izquierda 
    this._generatePathL(lastItem.x -= 1); 
  } else if (this.frames > 1285 && this.frames < 1350) { // giro derecha 
    this._generatePathL(lastItem.x += 1); 
  } else if (this.frames > 1345 && this.frames < 1390) { // recto 
    this._generatePathL(lastItem.x); 
  } else if (this.frames > 1385 && this.frames < 1540) { // giro derecha 
    this._generatePathL(lastItem.x += 1); 
  } else if (this.frames > 1535 && this.frames < 1685) { // giro izquierda 
    this._generatePathL(lastItem.x -= 1); 
  } else if (this.frames > 1680 && this.frames < 1850) { // recto 
    this._generatePathL(lastItem.x); 
  } else if (this.frames == 1851) {
    this._resultScreen();
  }
}

_generateTurnsR() {
  let lastItem = this.rightPathArray[this.rightPathArray.length - 1];

  if (this.frames >= 0 && this.frames < 160) {  // giro derecha 
    this._generatePathR(lastItem.x += 1); 
  } else if (this.frames > 155 && this.frames < 220) { // recto 
    this._generatePathR(lastItem.x);
  } else if (this.frames > 215 && this.frames < 490) { // giro izquierda 
    this._generatePathR(lastItem.x -= 1); 
  } else if (this.frames > 485 && this.frames < 510) { // recto 
    this._generatePathR(lastItem.x);
  } else if (this.frames > 505 && this.frames < 700) { // giro derecha 
    this._generatePathR(lastItem.x += 1); 
  } else if (this.frames > 695 && this.frames < 795) { // recto 
    this._generatePathR(lastItem.x); 
  } else if (this.frames > 790 && this.frames < 880) { // giro derecha 
    this._generatePathR(lastItem.x += 1); 
  } else if (this.frames > 875 && this.frames < 1020) { // recto 
    this._generatePathR(lastItem.x); 
  } else if (this.frames > 1015 && this.frames < 1290) { // giro izquierda 
    this._generatePathR(lastItem.x -= 1); 
  } else if (this.frames > 1285 && this.frames < 1350) { // giro derecha 
    this._generatePathR(lastItem.x += 1); 
  } else if (this.frames > 1345 && this.frames < 1390) { // recto 
    this._generatePathR(lastItem.x); 
  } else if (this.frames > 1385 && this.frames < 1540) { // giro derecha 
    this._generatePathR(lastItem.x += 1); 
  } else if (this.frames > 1535 && this.frames < 1685) { // giro izquierda 
    this._generatePathR(lastItem.x -= 1); 
  } else if (this.frames > 1680 && this.frames < 1850) { // recto 
    this._generatePathR(lastItem.x); 
  } else if (this.frames == 1851) {
    this._resultScreen();
  }
}

  _resultScreen() {
    window.cancelAnimationFrame(this.interval);
    this.gameOver();
    this._checkTimeOut(this.timeOut);
  }

  _deletePath(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[0].y >= this.canvasHeight) {
        array.shift();
      } 
    }
  }

  _checkCollision() {
    this.leftPathArray.forEach(element => {
      if (element.y > 350 && element.y < 370) {
        if (this.playerL.x < element.x || this.playerL.x + this.playerL.width > element.x + element.width) { 
          this.timeOut++;
          this.alert();
        } else {
          this.alertWhite();
        }
      }
    })
  }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 1200, 600);
  }

  _update() {
    this.frames += 1; 
    // clean
    this._cleanScreen();
    // draw
    this._movePathDown(this.leftPathArray);
    this._movePathDown(this.rightPathArray);
    this._deletePath(this.leftPathArray);
    this._deletePath(this.rightPathArray);
    this._drawPlayer(this.playerL);
    this._drawPlayer(this.playerR);  
    this._generateTurnsL();
    this._generateTurnsR();
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
    this._assignControlsToKeysL();
    this._assignControlsToKeysR()
    this._startLinePath();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}