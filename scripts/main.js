let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator');
  let playBtn = document.getElementById('play');
  let startScreen = document.getElementById('startscreen');
  let startBtn = document.getElementById('start');
  let container = document.getElementById('container')
  // let gameOver = document.getElementById("gameover");
  ctx = canvas.getContext('2d');

  game = new Game({ctx}, new Player(), new Path());

  function destroyStartScreen() {
    container.style = "display: block";
    startScreen.style = "display: none";
  };

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