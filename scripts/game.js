class Game {

  // drawPlayer();

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: // arrow left
          console.log('left');
          // this.snake.goLeft();
          break;
        case 39: // arrow right
          console.log('right');
          // this.snake.goRight();
          break;
        case 80: // p pause
          console.log('pause');
          // this.snake.intervalId ? this.snake.stop() : this.snake.move();
          break;
      }
    });
  };

  // generatePath();

  // checkCollision();

  // pause();

  // gameOver();

  start() {
    this._assignControlsToKeys();
  };
}