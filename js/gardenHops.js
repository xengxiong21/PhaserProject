// Phaser 3.3.0 "Tetsuo"
// download at https://phaser.io/download/stable


function gameStart() {
	// create our game
    var game = new Phaser.Game(window.innerWidth * .8, window.innerHeight * .8, Phaser.AUTO,'',{preload : preload, create: create, update: update});

    var gravity = 500;
    var score = 0;
    
    var sizeMultiplier = .8;

    function preload() {
            game.load.image('bunny', 'gardenHopsAssets/bunny.png');
            game.load.image('sky', 'gardenHopsAssets/gameBackground.png');
            game.load.image('tomato', 'gardenHopsAssets/tomato.png');
            game.load.image('carrot', 'gardenHopsAssets/carrot.png');
            game.load.image('cabbage', 'gardenHopsAssets/cabbage.png');
            game.load.image('corn', 'gardenHopsAssets/corn.png');
            game.load.image('pepper', 'gardenHopsAssets/pepper.png');
            game.load.image('pot', 'gardenHopsAssets/pot.png');
            game.load.image('life', 'gardenHopsAssets/life.png');
            game.load.image('cabbage','gardenHopsAssets/cabbage.png');


    }

    function create() {
        

            game.physics.startSystem(Phaser.Physics.ARCADE);

            skyBackground = game.add.tileSprite(0,0, game.width, game.height, 'sky');

            createBunny();
            createTomatoes();
            createCarrots();
            createCabbages();
            createCorn();
            createPeppers();
            createPots();
            createLives();

            bunnyMove = game.input.keyboard.addKey(Phaser.Keyboard.left, Phaser.Keyboard.right);


            createLives();
            createScoreText();

    }


    function update() {

            launchTomatoes();
            launchCarrots();
            launchCabbages();
            launchCorn();
            launchPeppers();
            launchPots();

            if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

            bunny.x -= 15;

            } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

            bunny.x += 15;

            }

            game.physics.arcade.overlap(bunny, cabbages, bunnyCatchesCabbage, null, this);

            game.physics.arcade.overlap(bunny, carrots, bunnyCatchesCarrot, null, this);

            game.physics.arcade.overlap(bunny, corn, bunnyCatchesCorn, null, this);

            game.physics.arcade.overlap(bunny, peppers, bunnyCatchesPepper, null, this);

            game.physics.arcade.overlap(bunny, tomatoes, bunnyCatchesTomato, null, this);

            game.physics.arcade.overlap(bunny, pots, potHitsBunny, null, this);

    }


    function createLives() {
    
     
        life = game.add.sprite(game.world.width - 100, 60, 'life');
        life.scale.setTo(.15, .15);
        life.anchor.setTo(0.5, 0.5);
        life.alpha = 0.8;
    
        
        lives = 3;
		gameLivesText = game.add.text(game.world.width - 100, 60, lives, {
			font: "35px Goudy Stout",
				fill: "#FFFFFF",
				align: "right"
			});
        gameLivesText.anchor.setTo(0.5, 0.5);
	
        
    
    }
	
    function createBunny() {
            bunny = game.add.sprite(game.world.centerX, game.world.height, 'bunny'); 
            bunny.anchor.setTo(0.5, 1);
            game.physics.enable(bunny, Phaser.Physics.ARCADE); 
            bunny.scale.setTo(.45 * sizeMultiplier, .45 * sizeMultiplier);

    }



    function launchTomatoes() {

            var tomato = tomatoes.getFirstExists(false);

            game.physics.arcade.enable(tomatoes);

            if(tomato) {
                    tomato.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                    tomato.reset(game.rnd.integerInRange(0, game.width), 0);

                    tomato.body.velocity.y = game.rnd.integerInRange(100, 300);
                    game.time.events.add(game.rnd.integerInRange(500, 500), launchTomatoes);

            }
    }
    
    function launchCarrots() {

        var carrot = carrots.getFirstExists(false);

        game.physics.arcade.enable(carrots);

        if(carrot) {
                carrot.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                carrot.reset(game.rnd.integerInRange(0, game.width), 0);

                carrot.body.velocity.y = game.rnd.integerInRange(100, 300);
                game.time.events.add(game.rnd.integerInRange(500, 500), launchCarrots);

        }
    }
    
    function launchCabbages() {
        var cabbage = cabbages.getFirstExists(false);

        game.physics.arcade.enable(cabbages);

        if(cabbage) {
                cabbage.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                cabbage.reset(game.rnd.integerInRange(0, game.width), 0);

                cabbage.body.velocity.y = game.rnd.integerInRange(100, 300);
                game.time.events.add(game.rnd.integerInRange(500, 500), launchCabbages); 

        }
    }
    
    function launchCorn() {
        var cornCob = corn.getFirstExists(false);

        game.physics.arcade.enable(corn);

        if(cornCob) {
                cornCob.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                cornCob.reset(game.rnd.integerInRange(0, game.width), 0);

                cornCob.body.velocity.y = game.rnd.integerInRange(100, 300); 
                game.time.events.add(game.rnd.integerInRange(500, 500), launchCorn);}
    }
    
    function launchPeppers() {
        var pepper = peppers.getFirstExists(false);

            game.physics.arcade.enable(peppers);

            if(pepper) {
                    pepper.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                    pepper.reset(game.rnd.integerInRange(0, game.width), 0);

                    pepper.body.velocity.y = game.rnd.integerInRange(100, 300);
                    game.time.events.add(game.rnd.integerInRange(500, 500), launchPeppers);}
    }
    
    function launchPots() {
        var pot = pots.getFirstExists(false);

            game.physics.arcade.enable(pots);

            if(pot) {
                    pot.scale.setTo(.25 * sizeMultiplier, .25 * sizeMultiplier);

                    pot.reset(game.rnd.integerInRange(0, game.width), 0);

                    pot.body.velocity.y = game.rnd.integerInRange(100, 300);
                    game.time.events.add(game.rnd.integerInRange(500, 500), launchPots);}
    }
    
    


	function createScoreText() {
        scoreString = "Score: ";
		gameScoreText = game.add.text(30, 10, scoreString + score, {
			font: "25px Goudy Stout",
				fill: "#FFFFFF",
				align: "left"
			});
	}

	function createTomatoes() {
		tomatoes = game.add.group();
		tomatoes.enablebody = true;
		tomatoes.physicsBodyType = Phaser.Physics.ARCADE;
		tomatoes.createMultiple(1, 'tomato');
                tomatoes.setAll('anchor.x', 0.5);
                tomatoes.setAll('anchor.y', 0.5);
		tomatoes.setAll('outOfBoundsKill', true);
		tomatoes.setAll('checkWorldBounds', true);
	}
    
    function createCarrots() {
		carrots = game.add.group();
		carrots.enablebody = true;
		carrots.physicsBodyType = Phaser.Physics.ARCADE;
		carrots.createMultiple(1, 'carrot');
                carrots.setAll('anchor.x', 0.5);
                carrots.setAll('anchor.y', 0.5);
		carrots.setAll('outOfBoundsKill', true);
		carrots.setAll('checkWorldBounds', true);
        
	}
    
    function createCabbages() {
		cabbages = game.add.group();
		cabbages.enablebody = true;
		cabbages.physicsBodyType = Phaser.Physics.ARCADE;
		cabbages.createMultiple(1, 'cabbage');
        cabbages.setAll('anchor.x', 0.5);
        cabbages.setAll('anchor.y', 0.5);
		cabbages.setAll('outOfBoundsKill', true);
		cabbages.setAll('checkWorldBounds', true);
        
	}
        function createCorn() {
		corn = game.add.group();
		corn.enablebody = true;
		corn.physicsBodyType = Phaser.Physics.ARCADE;
		corn.createMultiple(1, 'corn');
        corn.setAll('anchor.x', 0.5);
        corn.setAll('anchor.y', 0.5);
		corn.setAll('outOfBoundsKill', true);
		corn.setAll('checkWorldBounds', true);
        
	}
        function createPeppers() {
		peppers = game.add.group();
		peppers.enablebody = true;
		peppers.physicsBodyType = Phaser.Physics.ARCADE;
		peppers.createMultiple(1, 'pepper');
        peppers.setAll('anchor.x', 0.5);
        peppers.setAll('anchor.y', 0.5);
		peppers.setAll('outOfBoundsKill', true);
		peppers.setAll('checkWorldBounds', true);
        
	}
    
        function createPots() {
		pots = game.add.group();
		pots.enablebody = true;
		pots.physicsBodyType = Phaser.Physics.ARCADE;
		pots.createMultiple(6, 'pot');
        pots.setAll('anchor.x', 0.5);
        pots.setAll('anchor.y', 0.5);
		pots.setAll('outOfBoundsKill', true);
		pots.setAll('checkWorldBounds', true);
            
        
	}

	function bunnyCatchesTomato(bunny, tomatoes) {
        
        score += 5;
        gameScoreText.text = scoreString + score;
        tomatoes.kill();
        
	}
    
    function bunnyCatchesPepper(bunny, peppers) {
        
        score += 5;
        gameScoreText.text = scoreString + score;
        peppers.kill();
        
	}
    
    function bunnyCatchesCorn(bunny, corn) {
        
        score += 10;
        gameScoreText.text = scoreString + score;
        corn.kill();
        
	}
    
    function bunnyCatchesCabbage(bunny, cabbages) {
        
        score += 5;
        gameScoreText.text = scoreString + score;
        cabbages.kill();
        
	}
    
    function bunnyCatchesCarrot(bunny, carrots) {
        
        score += 5;
        gameScoreText.text = scoreString + score;
        carrots.kill();
        
	}
    
    function potHitsBunny(bunny, pots) {
        
        lives -= 1;
        gameLivesText.text = lives;
       
        pots.kill();
        
        if (lives < 1) {
            bunny.kill();
            alert("GAME OVER! Your score is " + score);
            restartGame();
        }
        
	}

	function restartGame() {
        lives = 3;
        score = 0;
        create();
		bunny.kill();
		cabbages.callAll('kill');
        carrots.callAll('kill');
        corn.callAll('kill');
        peppers.callAll('kill');
        tomatoes.callAll('kill');
        pots.callAll('kill');
		createBunny();
        createCabbages();
        createCarrots();
        createCorn();
        createPeppers();
        createPots();
        
	}

}