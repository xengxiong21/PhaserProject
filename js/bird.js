	// Phaser 3.3.0 "Tetsuo"
	// download at https://phaser.io/download/stable


function gameStart() {
	// create our game
	var game = new Phaser.Game(400,500,Phaser.AUTO,'',{preload : preload, create: create, update: update});

	var gravity = 1000;
	var birdPower = 300;

	var timer = 0;
    var score = 0;

	// load any assets ahead of time
	function preload() {
		game.load.image('bird', 'birdAssets/bird.png'); // load the bird
		game.load.image('sky', 'birdAssets/sky.png'); // load the sky image into variable named sky
		game.load.image('bee', 'birdAssets/bee.png'); // add pipe image so we can use it later


	}

	//
	// create function
	// create function
	//
	function create() {

		// enable arcade physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// load the sky image as our background
		skyBackground = game.add.tileSprite(0,0, game.width, game.height, 'sky');


		// add the bird
		createBird();
		createBees();
		launchBees();


		// game inputs ( only using spacebar for now)
		birdFly = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        timer = game.time.create(false);
        
        timer.loop(1000, updateCounter, this);
        
        timer.start();


	

	}// end of create()

    function updateCounter(){
        
        score++;
    }

	//
	// update function
	//
	function update() {

		// scroll the background
		skyBackground.tilePosition.x -=1;

		if (bird.y < 0 || bird.y > 500) {
			restartGame();
		}

		// bird will move up on spaceBar click, 
		if (birdFly.isDown) {
			bird.body.velocity.y = - birdPower;
		}

        game.debug.text('Score: ' + score, 32, 32);
		//score = game.time.totalElapsedSeconds();
		//console.log(score);

		// this will update when we collide, calls the birdCollision function when bee and bird 'overlap'
		game.physics.arcade.overlap(bird, bees, birdCollision, null, this);


	}// end of update()

	//
	// create the bird
	//
	function createBird() {
		bird = game.add.sprite(game.world.centerX -150, game.world.centerY, 'bird'); // add our bird, game.world.centerX, game.world.centerY is center of our screen
		bird.anchor.setTo(0.5, 0.5); // anchor point of our bird sprite is the middle
		game.physics.enable(bird, Phaser.Physics.ARCADE); // enable arcade physics
		bird.body.gravity.y = gravity; // makes the bird fall  
		bird.scale.setTo(.45, .45);

	}


		function launchBees() {


			var minBeeSpawn = 500;
			var maxBeeSpawn = 500;
			var bee = bees.getFirstExists(false);

			game.physics.arcade.enable(bees);

			if(bee) {
				bee.scale.setTo(.25, .25);
				bee.reset(game.world.width, (game.rnd.integerInRange(0, game.height)));
				bee.body.velocity.x = game.rnd.integerInRange(-300, -300); // random speeds for bees between two values
				game.time.events.add(game.rnd.integerInRange(minBeeSpawn, maxBeeSpawn), launchBees); // randomly launch bees from right side of screen

			}
		}




	function createBees() {
		bees = game.add.group();
		bees.enablebody = true;
		bees.physicsBodyType = Phaser.Physics.ARCADE;
		bees.createMultiple(10, 'bee');
		bees.setAll('outOfBoundsKill', true);
		bees.setAll('checkWorldBounds', true);
	}

	// collider with bees
	function birdCollision(bee, bird) {
		restartGame();
	}

	// restart funtion
	function restartGame() {
		bird.kill();
		bees.kill();
		createBird();
		createBees();
		launchBees();
        score = 0;
	}

}




















