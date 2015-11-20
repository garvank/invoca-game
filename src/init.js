function init() {

    /* Declare global variables in here with window namespace */

    // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
    // which will try to choose the best renderer for the environment you are in.
    var oldScore = readCookie("gameHighScore") || 0;

    window.game = {
        stage: {
            height: 600,
            width: 350
        },
        highScore: oldScore,
        score: 0,
        difficulty: 600,
        callReady: true,
        callSpeed: 5,
        paused: false,
        moveSpeed: 15,
        totalLives: 3,
        livesLeft: 3,
        heartReady: true
    };

    // To play again
    window.playAgain = function(){
        game.score = 0;
        game.paused = false;
        game.livesLeft = game.totalLives;
        clearAll();
        setup();
    };

    // The renderer will create a canvas element for you that you can then insert into the DOM.
    window.renderer = new PIXI.autoDetectRenderer(game.stage.width, game.stage.height);
    document.body.appendChild(renderer.view);

    // You need to create a root container that will hold the scene you want to draw.
    window.stage = new PIXI.Container();
    
    // kick off the animation loop (defined below)
    setup();
}