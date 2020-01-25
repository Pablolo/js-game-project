class Game {
  constructor(ctx) {
    this.ctx = ctx;
  }

  _drawPlayer() {
    this.ctx.fillRect(250, 360, 20, 20);
    this.ctx.fillStyle = "black";
  };

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: // arrow left
          console.log('left');
          // this.player.goLeft();
          break;
        case 39: // arrow right
          console.log('right');
          // this.player.goRight();
          break;
        case 80: // p pause
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