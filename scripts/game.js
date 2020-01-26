class Game {
  constructor(ctx, player) {
    this.ctx = ctx;
    this.player = player;
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
    });
  };

 
  // generatePath();

  // checkCollision();

  // pause();

  // gameOver();

  start() {
    this._drawPlayer();
    this._assignControlsToKeys();
  };
}