class Game {
  constructor(options, player) {
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.leftPath = [];
    this.rightPath = [];
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
    // llenar el array de paths con tantos como necesites.
    console.log('works?');
    let speed = -5;

    for (let i = 0; i < 100; i++) {
      speed += 5;
      this.leftPath.push(new Path(0, speed));
    } 
 
    // this.path.paintPath();
  };

  // recorrer el array y hacer el draw de cada elemento
  _drawPath() {
    this.leftPath.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    // limpiar
    this._cleanScreen();
    // pintar
    this._drawPlayer(); 
    this._drawPath();
    // movepath para acortar o aumentar
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  // _checkCollision() 

  // pause();

  // gameOver();

  start() {
    this._assignControlsToKeys();
    this._generatePath();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}