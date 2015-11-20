function gameLoop() {
  if(!game.paused){
    requestAnimationFrame(gameLoop);
    state();
    renderer.render(stage);
  }
}

function play() {
  moveCharacter();
  makeCall();
  if(game.score % 50 === 0){
    makeHeart();
  }
}

function gameOver(){

  clearAll();
  console.log("Score was: " + game.score);
  if(game.highScore < game.score){
    game.highScore = game.score;
    setCookie("gameHighScore", game.highScore, 365);
  }

  var game_over = new PIXI.Text("Game Over\nYour score was: " + game.score + "\n\nHigh Score: " + game.highScore, {font:"25px Arial", fill:"white"});
      game_over.x = game.stage.width/2 - game_over.width/2;
      game_over.y = game.stage.height/2 - game_over.height;
  
  var play_again = new PIXI.Text("Press enter to play again!", {font:"15px Arial", fill:"white"});
      play_again.x = game.stage.width/2 - play_again.width/2;
      play_again.y = game_over.y + 200;

  stage.addChild(game_over);
  stage.addChild(play_again);

  game.paused = true;
}