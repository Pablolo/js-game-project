
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
  let logoImage = document.getElementById('logo-image');
  let approvedLogo = document.getElementById('approved');
  let rejectedLogo = document.getElementById('rejected');
  
  let sfxAlert = new Audio("music/SFX_Car Horn Honk 51.mp3");
  let sfxAlertL = new Audio("music/SFX_Car Horn Honk 51.mp3"); // had to duplicate or didnt work properly
  let audio = document.getElementById('main-song');
  audio.play();
  
  let ctx = canvas.getContext('2d');

  setTimeout(function() {
    logoImage.style = "transform: rotate(-10deg); transition-duration: 2s;"
  }, 1500);

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

  let game = new Game({
    ctx,
    canvasHeight: canvas.height,
    canvasWidth: canvas.width,
    rightPerc,
    passedFailed,
    approvedLogo,
    rejectedLogo,
    sfxAlert,
    sfxAlertL,
  }, createGameOverScreen, alertRed, alertWhite);

})