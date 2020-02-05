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
  let rightPerc = document.getElementById('right-final-number');
  let passedFailed = document.getElementById('passed-failed');
  let instructions = document.getElementById('instructions');
  ctx = canvas.getContext('2d');

  function alertWhite() {
    canvas.style = "border: 10px solid white";
  }

  function alertRed() {
    canvas.style = "border: 10px solid #fc5c65"; //  #c0392b
  }

  function destroyStartScreen() {
    startScreen.style = "display: none";
    container.style = "display: block";
    body.style = "background-color: black;"
  };

  function hideReadyBtn() {
    playBtn.style = "display: none";
    instructions.style = "display: none";
  }

  function createGameOverScreen() {
    container.style = "display: none";
    gameOver.style = "display: block";
    body.style = "background-color: white;"
  };

  playAgain.addEventListener('click', function() {
    window.location.reload();
  })

  startBtn.addEventListener('click', function() {
    destroyStartScreen();
  });

  playBtn.addEventListener('click', function(){
    hideReadyBtn();
    game.start();
  });

  // createPauseScreen();

  game = new Game({
    ctx,
    canvasHeight: canvas.height,
    rightPerc,
    passedFailed,
  }, new Player({
    canvasWidth: canvas.width,
  }), createGameOverScreen, alertRed, alertWhite);

})