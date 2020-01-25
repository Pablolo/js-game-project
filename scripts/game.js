class Game {

  drawPlayer();

  assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: // arrow left
          // this.snake.goLeft();
          break;
        case 39: // arrow right
          // this.snake.goRight();
          break;
        case 80: // p pause
          // this.snake.intervalId ? this.snake.stop() : this.snake.move();
          break;
      }
    });
  };

  generatePath();

  checkCollision();

  pause();

  gameOver();

  start();
}