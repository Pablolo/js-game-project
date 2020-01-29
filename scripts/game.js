class Game {
  constructor(options, player) {
    this.ctx = options.ctx;
    this.player = player;
    this.interval = undefined;
    this.leftPath = [];
    this.rightPath = [];
    this.frames = 0;
    this.intervalId = undefined;
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

  _generatePath() {   // llenar el array de paths con tantos rectangulos como necesite
    // let width = 150;
    for (let i = 0; i < 1; i++) {
      this.leftPath.push(new Path(0, 0, 150));
    } 
  };

  _drawPath() {   // recorrer el array y hacer el draw de cada elemento
    this.leftPath.forEach(element => {
      this.ctx.fillStyle = element.color;
      this.ctx.fillRect(element.x, element.y, element.width, element.height);
    });
  }
  
  _movePathDown() { 
    this.leftPath.forEach(element => {
      element.y += 1;
    })
    this._generatePath();
    if (this.leftPath.length === 800) {
      this.leftPath.shift();
    }

    // this._turnLeft();
    var that = this;
    setTimeout(function() {
      that._turnLeft();
    }, 1000);
  }

  _turnLeft() {
    if (this.frames % 5 === 0) {
      this.leftPath.forEach(element => {
        element.width -= 1;
      })
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
    this._drawPath();
    this._drawPlayer(); 
    this._movePathDown();
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