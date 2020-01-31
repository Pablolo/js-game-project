class Game {
  constructor(options, player) {
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.pathArray = [];
    this.frames = 0;
  }

  _drawPlayer() {
    this.ctx.fillStyle = this.player.color;  
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  };

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: 
          console.log('left');
          this.player.goLeft();
          break;
        case 39: 
          console.log('right');
          this.player.goRight();
          break;
        case 80: 
          console.log('pause');
          // this.player.intervalId ? this.player.stop() : this.player.move();
          break;
      }
      e.preventDefault();
    });
  };

  _generatePath(x, width) {  
    this.pathArray.push(new Path(this.ctx, x, 0)); // cero porque empieza arriba
  };
  
  _movePathDown() { 
    this.pathArray.forEach((element, i) => {
      element.draw();
      element.move();
    })
  }

  _generateTurns() {
    if (this.frames > 100 && this.frames < 260) {  
      this._generatePath(70 + this.frames); // giro a la derecha
    } else if (this.frames > 255 && this.frames < 470) { // recto
      this._generatePath(330);
    } else if (this.frames > 465 && this.frames < 690) { // giro izquierda
      this._generatePath(800 - this.frames);
    } else if (this.frames > 685 && this.frames < 870) { // recto
      this._generatePath(110);
    } else {
      this._generatePath(170); // esta es la linea recta enmedio
    }
  }

// Método para generar un elemento según los frames(n) indicados
// Game.prototype._frameInterval = function (n) {
//   if ( (this.frameNo / n) % 1 == 0) { 
//     return true; 
//   }
//   return false;
// };



  _deletePath() {
    if (this.pathArray.length === 800) {
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
    
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  // _checkCollision() 

  // pause();

  // gameOver();

  start() {
    this._assignControlsToKeys();

    for (let i = 0; i < 100; i++) {
      
    }

    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}