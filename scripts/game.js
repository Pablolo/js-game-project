class Game {
  constructor(options, player, path) {
    this.ctx = options.ctx;
    this.player = player;
    this.path = path;
    this.interval = undefined;
  }

  _drawPlayer() {
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    this.ctx.fillStyle = this.player.color;  
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

  _generatePath() {
    this.ctx.fillRect(this.path.x, this.path.y, this.path.width, this.path.height);
    // this.ctx.fillRect(this.path.xRight, this.path.yRight, this.path.widthRight, this.path.heightRight);
    ctx.fillStyle = this.path.color;
    console.log('drawing path');
  };

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    // limpiar
    this._cleanScreen();
    // pintar
    this._drawPlayer(); 
    this._generatePath();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  // _checkCollision() 

  // pause();

  // gameOver();

  start() {
    this._assignControlsToKeys();
    // this._generatePath();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}