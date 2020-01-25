let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  ctx = canvas.getContext('2d');
  ctx.fillStyle = "black";
  ctx.fillRect(250, 360, 20, 20);

  function createStartScreen() {
    game.start();
    const startBtn = document.getElementById('start');
    startBtn.style = "display: none";
  };

  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', start);

  // createGameScreen();

  // createPauseScreen();

  // function createGameOverScreen() {
  //   let gameOver = document.getElementById("gameover");
  //   canvas.style = "display: none";
  //   gameOver.style = "display: block";
  // };

  // destroyStartScreen();

  // destroyGameScreen();

  // destroyPauseScreen(id);

  // destroyGameOverScreen();
  
  let game = new Game({
      ctx: ctx,
      // this.path,
      // this.player
  });

})