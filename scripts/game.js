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

  if (this.frames > 100 && this.frames < 260) {  // giro a la derecha 
    this._generatePath(lastItem.x += 1); 
  } else if (this.frames > 255 && this.frames < 470) { // recto 
    this._generatePath(lastItem.x);
  } else if (this.frames > 465 && this.frames < 690) { // giro izquierda 
    this._generatePath(lastItem.x -= 1); 
  } else if (this.frames > 685 && this.frames < 870) { // recto 
    this._generatePath(lastItem.x); 
  } else if (this.frames > 865 && this.frames < 1190) { // giro derecha 
    this._generatePath(lastItem.x += 1); 
  } else {
    this._generatePath(170); // esta es la linea recta de enmedio
  }
}

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
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}