function setup() {

  // This creates a texture from a 'invoca.png' image.
  var invocaTexture = PIXI.Texture.fromImage('img/invoca.png');
  window.invoca = new PIXI.Sprite(invocaTexture);
    invoca.height = 50;
    invoca.width = 50;
    invoca.x = game.stage.width/2 - invoca.width/2;
    invoca.y = game.stage.height - invoca.height - 15;
    invoca.vx = 0;
    invoca.vy = 0;

  // Add invoca icon to the stage
  stage.addChild(invoca);
  
  // Set up key bindings
  keyBindings();
  
  // Set the game state
  window.state = play;

  // Set up the score
  window.theScore = new PIXI.Text("Score: " + game.score, {font:"15px Arial", fill:"white"});
  theScore.x = game.stage.width/2 - theScore.width/2;
  theScore.y = game.stage.height - 15;

  stage.addChild(theScore);

  // Initialize lives
  window.lives = {};
  initLives();

  //Start the game loop
  gameLoop();
}