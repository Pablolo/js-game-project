let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  ctx = canvas.getContext('2d');

  game = new Game(ctx, new Player());

  // function createStartScreen() {
  //   game.start();
  //   const startBtn = document.getElementById('start');
  //   startBtn.style = "display: none";
  // };

  // const startBtn = document.getElementById('start');
  // startBtn.addEventListener('click', start);

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
  
})