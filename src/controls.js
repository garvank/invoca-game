// Keyboard handling
// ------------------------
function keyboard(keyCode) {
  
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  // Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}


// Set up key bindings
// ----------------------
function keyBindings(){
  //Capture the keyboard arrow keys
  var left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40),
      space = keyboard(32),
      enter = keyboard(13);
  
  // Cheat code
  // -------------------------
  space.press = function(){
    game.callSpeed = 2;
    setTimeout(function(){
      game.moveSpeed = 2;
    }, 10000);
  };

  space.release = function(){
    game.moveSpeed = 15;
    game.callSpeed = 7;
  };

  // Play again
  enter.press = function(){
    if(game.paused)
    {
      playAgain();
    }
  };

  // Left Key
  // -------------------------
  left.press = function() {
    invoca.vx = -game.moveSpeed;
    invoca.vy = 0;
  };
  
  left.release = function() {
    if (!right.isDown && invoca.vy === 0) {
      invoca.vx = 0;
    }
  };
  

  // Right Key
  // -------------------------
  right.press = function() {
    invoca.vx = game.moveSpeed;
    invoca.vy = 0;
  };

  right.release = function() {
    if (!left.isDown && invoca.vy === 0) {
      invoca.vx = 0;
    }
  };  
}

