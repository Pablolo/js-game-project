class Game {
  constructor(options, player) {
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.pathArray = [];
    this.frames = 0;
    this.paused = false;
    this.timeOut = 0;
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
      this.pathArray.push(new Path(this.ctx, 170, i));
    } 
  }

  _generatePath(x) {  
    this.pathArray.push(new Path(this.ctx, x, 0)); // cero porque empieza arriba
  };
  
  _movePathDown() { 
    this.pathArray.forEach((element, i) => {
      element.draw();
      element.move();
    })
  }

  _generateTurns() {
  let lastItem = this.pathArray[this.pathArray.length - 1];

  if (this.frames > 0 && this.frames < 160) {  // giro derecha 
    this._generatePath(lastItem.x += 1); // 
  } else if (this.frames > 155 && this.frames < 370) { // recto 
    this._generatePath(lastItem.x);
  } else if (this.frames > 365 && this.frames < 690) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 685 && this.frames < 870) { // recto 
    this._generatePath(lastItem.x);
  } else if (this.frames > 865 && this.frames < 1090) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 1085 && this.frames < 1350) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 1345 && this.frames < 1450) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 1445 && this.frames < 1590) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 1585 && this.frames < 1820) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 1815 && this.frames < 2050) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 2045 && this.frames < 2190) { // recto 
    this._generatePath(lastItem.x); 
  } else {
    this._generatePath(170); // esta es la linea recta de enmedio
  }
}

  _deletePath() {
    if (this.pathArray.length >= 1200) {
      this.pathArray.shift();
    }  
  }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    this.frames += 1;
    // limpiar
    this._cleanScreen();
    // pintar
    this._movePathDown();
    this._deletePath();
    this._drawPlayer(); 
    this._generateTurns();
    this._checkCollision();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  _checkCollision() {
    // console.log(this.player.y);
   
    this.pathArray.forEach(element => {
      if (element.y > 350 && element.y < 370) {
        if (this.player.x < element.x || this.player.x + this.player.width > element.x + element.width) { // salida izquierda
          this.timeOut++;
        } 
      }
    })
    console.log(this.timeOut);
  }

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
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}