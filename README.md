# Coordinator 2000
<p align="center">
  <img src="https://i.imgur.com/XBUDb9F.png">
</p>

The purpose of the game is to avoid stepping out of the way. It's a game of coordination eye-hand.
The game screen will be a a moving road viewed from above.
The player is represented by a dot (representing in turn a car) that moves only in horizontal each time the player clicks a button on the keyboard.
The final game will consist in 2 screens (left-right) with the same layout, but with different movements of the road, with the purpose of making it a challenge to maintain both dots in the middle of the road.
The game will finish at a certain point, and then the game over screen will show the percentage (%) of time that the player stepped out of the way from the start to the end, for both hands separately and altogether as well.

* * *
## MVP
### Technique
Html5 __Canvas__ and Vanilla __Javascript__
### Game states
* __Start Screen__
  * Title
  * Play button
* __Game Screen__
  * Canvas
* __Pause Screen__
* __Game Over Screen__
  * Play again button
  * Go to start screen button
### Game
* Create dot.
* Move dot horizontally.
  * Click on right or left arrows to move player on the canvas.
* Create the road.
  * First, a straight line.
  * Then, add turns, right or left.
* Check collision (when the dot is stepping out of the road).
* If collision -> Sum time that the dot is out of the way --> Change color of the dot.
* Make it faster when time passes.
* End game at a certain point (? seconds).
* * *
## BACK LOG
### Add the second screen
* Both screens will run out at the same time, changing only the turns in each to make it difficult. 
### Score
* Calculate % of time stepping out on both screens at the same time and show the average of both.
### High score
* Create High Score Screen.
* Show latest score on Start Screen.
* Add high score button to Start Screen.
### Music
* Add background music to game.
* Add sound effect every time the dot gets out of the way.
### Player colors
* Add colors to overall play screen.
### Levels
* Maximum level shows Game Over if you step out of the line just once.
* * *
## Data structure
__main.js__
````
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
game.start();
````
__game.js__
````
function Game(options){};
game.drawPlayer();
game.assignControlsToKeys();
game.generatePath();
game.checkCollision();
game.pause();
game.gameOver();
game.start();
````
__player.js__
````
function Player(){
  this.width;
  this.height;
  this.color;
};
player.move();
````
__path.js__
````
function Path(){
  this.width;
  this.height;
  backgroundcolor = ['xxx','xxx','xxx'];
};
moveForward();
````
## Links
[Coordinator 2000 Trello](https://trello.com/b/9QLvlAV0/coordinator-2000-game)

[Github](https://github.com/Pablolo/js-game-project)

[Netlify](https://eloquent-hamilton-0cec38.netlify.com)

[Slides](https://docs.google.com/presentation/d/1rE5OJ5k09h1GtK3-jZ0uBUpizRYse1OuE5fyvZ8tVT0/edit?usp=sharing)

