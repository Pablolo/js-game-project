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
  let instructions = document.getElementById('instructions-together');
  let counter = document.getElementById('timer-counter');
  let newCounter = document.getElementById('timer-counter');
  
  ctx = canvas.getContext('2d');

  function alertWhite() {
    canvas.style = "border: 10px solid white";
  }

  function alertRed() {
    canvas.style = "border: 10px solid #fc5c65"; 
  }

  function destroyStartScreen() {
    startScreen.style = "display: none";
    container.style = "display: block";
    body.style = "background-color: black;"
  };

  function hideInstructions() {
    playBtn.style = "display: none";
    instructions.style = "display: none";
    counter.style = "display:block";
  }

  function createGameOverScreen() {
    container.style = "display: none";
    gameOver.style = "display: block";
    body.style = "background-color: #121a21;"
  };

  playAgain.addEventListener('click', function() {
    window.location.reload();
  })

  startBtn.addEventListener('click', function() {
    destroyStartScreen();
  });

  playBtn.addEventListener('click', function(){
    hideInstructions();
    game.start();
  });

  game = new Game({
    ctx,
    canvasHeight: canvas.height,
    canvasWidth: canvas.width,
    rightPerc,
    passedFailed,
  }, createGameOverScreen, alertRed, alertWhite);

})