let ctx;
let game;

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById('coordinator')
  ctx = canvas.getContext('2d');

  createStartScreen(id);

  createGameScreen(id);

  createPauseScreen(id);

  createGameOverScreen(id);

  destroyStartScreen();

  destroyGameScreen();

  destroyPauseScreen(id);
  
  destroyGameOverScreen();
  
  let game = new Game({
      ctx: ctx,
      this.path,
      this.player
    });
  game.init();

})