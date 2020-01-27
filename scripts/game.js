class Game {
  constructor(options, player, path) {
    this.ctx = options.ctx;
    this.player = player;
    this.path = path;
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
    ctx.fillStyle = this.path.color;
    this.ctx.fillRect(this.path.xLeft, this.path.yLeft, this.path.widthLeft, this.path.heightLeft);
    this.ctx.fillRect(this.path.xRight, this.path.yRight, this.path.widthRight, this.path.heightRight);
  };

  // checkCollision();

  // pause();

  // gameOver();

  start() {
    this._drawPlayer();
    this._generatePath();
    this._assignControlsToKeys();
  };
}