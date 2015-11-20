// Make new calls
// -------------------
function makeCall(){

  function moveCall(){
    if( didCollide(call, invoca)){
      updateScore();
      stage.removeChild(call);
    }else if( call.y <= game.stage.height + call.height ){
      call.y += call.vy;
      requestAnimationFrame(moveCall);
    }else {
      livesLeft(-1);

    }
  }

  function callReady(){
    var waitTime = randInt(250, game.difficulty);
  
    setTimeout(function(){
      game.callReady = true;
    }, waitTime);
  }
  
  
  if(game.callReady){
    game.callReady = false;
  
    var callTexture = PIXI.Texture.fromImage('img/phones/phone-icon.png');
    var call = new PIXI.Sprite(callTexture);
      call.height = 50;
      call.width = 50;
      call.x = randInt(0, game.stage.width - call.width);
      call.y = 0 - call.height;
  
      call.vx = 0;
      call.vy = game.callSpeed;
  
      stage.addChild(call);
      callReady();
  
    requestAnimationFrame(moveCall);
  }
}

//// Hearts

function makeHeart(){

  function moveHeart(){
    if( didCollide(heart, invoca)){
      livesLeft(1);
      stage.removeChild(heart);
      game.heartReady = true;
    }else if( heart.y <= game.stage.height + heart.height ){
      heart.y += heart.vy;
      requestAnimationFrame(moveHeart);
    }else {
      game.heartReady = true;
    }
  }
  
  if(game.heartReady){
    game.heartReady = false;
    var heartTexture = PIXI.Texture.fromImage('img/heart.png'); // + phoneNumber + '.gif');
    var heart = new PIXI.Sprite(heartTexture);
      heart.height = 50;
      heart.width = 50;
      heart.x = randInt(0, game.stage.width - heart.width);
      heart.y = 0 - heart.height;
  
      heart.vx = 0;
      heart.vy = game.callSpeed;
  
      stage.addChild(heart);
    }
  
    requestAnimationFrame(moveHeart);
}

// Move character if pressed
// ---------------------------
function moveCharacter(){
  // Use the invoca's velocity to make it move
  diffX = invoca.x + invoca.vx;
  diffY = invoca.y + invoca.vy;
  invoca.x = ( diffX <= game.stage.width - invoca.width && diffX >= 0 ) ? diffX : invoca.x;
  invoca.y = ( diffY <= game.stage.height - invoca.height && diffY >= 0 ) ? diffY : invoca.y;
}