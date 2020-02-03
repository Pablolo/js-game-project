let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  let playBtn = document.getElementById('play');
  let startScreen = document.getElementById('startscreen');
  let startBtn = document.getElementById('start');
  let container = document.getElementById('container');
  let gameOver = document.getElementById("gameover");
  // let body = document.getElementsByClassName('body');
  ctx = canvas.getContext('2d');

  let alertRed = () => {
    canvas.style = "border: 10px solid red";
  }

  function destroyStartScreen() {
    startScreen.style = "display: none";
    container.style = "display: block";
  };

  function createGameOverScreen() {
    container.style = "display: none";
    gameOver.style = "display: block";
  };

  startBtn.addEventListener('click', function() {
    destroyStartScreen();
  });

  playBtn.addEventListener('click', function(){
    game.start();
  });

  // createPauseScreen();

  game = new Game({
    ctx,
    canvasHeight: canvas.height,
    alertRed,
  }, new Player({
    canvasWidth: canvas.width,
  }), createGameOverScreen);

})