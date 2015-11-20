function randInt(min,max){
  var range = max - min;  
  var rand = Math.floor(Math.random() * (range + 1));
  return min + rand;
}

function didCollide(r1, r2){
return !(r2.x > (r1.x + r1.width) || 
        (r2.x + r2.width) < r1.x  || 
        r2.y > (r1.y + r1.height) ||
        (r2.y + r2.height) < r1.y);
}

function clearAll(){
  for (var i = stage.children.length - 1; i >= 0; i--) {
    stage.removeChild(stage.children[i]);
  }
}

function updateScore(){
  game.score++;
  theScore.text = "Score: " + game.score;

  if(game.difficulty >= 250){
    game.difficulty -= 10;
  }
}

function initLives(){
    var lifeTexture = PIXI.Texture.fromImage('img/heart.png'); // + phoneNumber + '.gif');
    
    for (var i = game.livesLeft; i >= 1; i--) {
      lives["life"+i] = new PIXI.Sprite(lifeTexture);
      lives["life"+i].height = 15;
      lives["life"+i].width = 15;
      lives["life"+i].x = game.stage.width - ((lives["life"+i].height + 2) * i);
      lives["life"+i].y = game.stage.height - lives["life"+i].height;
      stage.addChild(lives["life"+i]);
    }
}

function livesLeft(change){

  function killLives(){
    var kill = game.livesLeft + 1;
    if (kill !== 0){
      stage.removeChild(lives["life"+kill]);
    }
  }

  if(game.livesLeft + change < game.totalLives){
    game.livesLeft += change;
  }

  if(game.livesLeft > 0){
    killLives();
  }else{
    state = gameOver;
  }
}


///// Cookies
setCookie = function (cookieName, cookieValue, days) {

  var d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));

  var expires = "expires=" + d.toUTCString(),
      path = "path=/",
      fullDomain = document.domain.split('.'),
      req = fullDomain.length - 2,
      theDomain = "domain=." + fullDomain[req] + "." + fullDomain[req + 1];

  document.cookie = cookieName + "=" + cookieValue + "; " + expires + "; " + path + "; " + theDomain;
};

readCookie = function (key) {
  return (document.cookie.match('(^|; )' + key + '=([^;]*)') || 0)[2] || null;
};
