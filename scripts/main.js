let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  let playBtn = document.getElementById('play');
  // let startScreen = document.getElementById('startscreen');
  let startBtn = document.getElementById('start');
  // let container = document.getElementById('container');
  // let body = document.getElementsByClassName('body');
  // let gameOver = document.getElementById("gameover");
  ctx = canvas.getContext('2d');

  let alertRed = () => {
    canvas.style = "border: 10px solid red";
  }

  // let alertRed = function() {
  //   return canvas.style = "border: 10px solid red";
  // }

  game = new Game({
    ctx,
    canvasHeight: canvas.height,
    alertRed: alertRed,
  }, new Player({
    canvasWidth: canvas.width,
  }));

  // function destroyStartScreen() {
  //   container.style = "display: block";
  //   startScreen.style = "display: none";
  //   body[0].style = "background-color: gray";
  // };

  startBtn.addEventListener('click', function() {
    destroyStartScreen();
  });

  playBtn.addEventListener('click', function(){
    game.start();
  });


  // createGameScreen();

  // createPauseScreen();

  // function createGameOverScreen() {
  //   canvas.style = "display: none";
  //   gameOver.style = "display: block";
  // };

  // destroyGameScreen();

  // destroyPauseScreen(id);

  // destroyGameOverScreen();
  
})