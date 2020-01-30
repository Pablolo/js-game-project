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

  _generatePath() {   // llenar el array de paths 
    this.pathArray.push(new Path(this.ctx, 170, 0, 160));
  };

  // _drawPath() {   // recorrer el array y hacer el draw de cada elemento
  //   this.pathArray.forEach(element => {
      
  //   });
  // }
  
  _movePathDown() { 
    this.pathArray.forEach((element, i) => {
      element.draw();
      //element.y += 1;
      element.move();
      // console.log(i);
      // if ()
      // element.width += 1;
      // element.x += 1;
    })


    //this._generatePath();
    //if (this.pathArray.length === 800) {
    //  this.pathArray.shift();
    //}    
  }

  _deleteArrayStuff() {
    if (this.pathArray.length === 800) {
       this.pathArray.shift();
      }  
  }

  _turnLeft() {
    this.pathArray.push(new Path(150, 0, 160));
  }

  _turnRight() {
    this.pathArray.push(new Path(190, 0, 160));
  }

  // _turnLeft() {
  //   if (this.frames % 5 === 0) {
  //     this.pathArray.forEach(element => {
  //       element.width -= 1;
  //     })
  //   }
  // }

  // _turnRight() {
  //   if (this.frames % 5 === 0) {
  //     this.pathArray.forEach(element => {
  //       element.width += 1;
  //     })
  //   }
  // }

  // _theRoad() {
  //   this._movePathDown();
  //   if (this.frames % 60 === 0) {
  //     this._turnLeft();
  //     this._turnRight();
  //   }
  // }

  // _roadStartToFinish() {
  //   let that = this;
  //   this._movePathDown();
  //   setTimeout(function() {
  //     that._turnLeft();
  //   }, 1000);
  //   setTimeout(function() {
  //     that._turnRight();
  //   }, 3000);
  // }

  _cleanScreen() {
    this.ctx.clearRect(0, 0, 500, 600);
  }

  _update() {
    this.frames += 1;
    console.log(' update')
    // limpiar
    this._cleanScreen();
    // pintar
    
    this._generatePath();
    this._movePathDown();
    this._deleteArrayStuff();
    this._drawPlayer(); 
    // this._theRoad();
    // this._roadStartToFinish();  
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this._update.bind(this));
    }
  }

  // _checkCollision() 

  // pause();

  // gameOver();

  start() {
    this._assignControlsToKeys();
    // this._movePathDown();
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  };
}