let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  let playBtn = document.getElementById('play');
  let startScreen = document.getElementById('startscreen');
  let startBtn = document.getElementById('start');
  let container = document.getElementById('container');
  let gameOver = document.getElementById("gameover");
  let playAgain = document.getElementById('tryagain');
  let body = document.getElementById('body');
  ctx = canvas.getContext('2d');

  function alertWhite() {
    canvas.style = "border: 10px solid white";
  }

  function alertRed() {
    canvas.style = "border: 10px solid #c0392b";
  }

  function destroyStartScreen() {
    startScreen.style = "display: none";
    container.style = "display: block";
    body.style = "background-color: black;"
  };

  function createGameOverScreen() {
    container.style = "display: none";
    gameOver.style = "display: block";
  };

  playAgain.addEventListener('click', function() {
    window.location.reload();
  })

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
  }, new Player({
    canvasWidth: canvas.width,
  }), createGameOverScreen, alertRed, alertWhite);

})