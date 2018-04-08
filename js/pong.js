function gameStart() {
	
	var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload : preload, create: create, update: update});
			
			var paddle1;
			var paddle2;
			var ball;
			
			var ballLaunched;
			var ballVelocity;
			
			var easyVelocity;
			var normalVelocity;
			var hardVelocity;
			
			var score1Text;
			var score2Text;
			
			var score1;
			var score2;
			
			var score;
			var scoreText;
			
			
			
			function preload() {
				
				game.load.image('paddle','pongAssets/paddle.png');
				game.load.image('ball', 'pongAssets/ball.png');
				
				game.load.audio('hit1',['pongAssets/beep.wav']);
				game.load.audio('hit2',['pongAssets/whip.wav']);
					
			}
				
			function create() {
				
				
				
				ballLaunched = false;
				ballVelocity = 1200;
				
				easyVelocity = ballVelocity * 0.25;
				normalVelocity = ballVelocity * 0.50;
				hardVelocity = ballVelocity * 0.75;
				
				paddle1 = create_paddle(0, game.world.centerY);
				paddle2 = create_paddle(game.world.width -8, game.world.centerY);
				ball = createBall(game.world.centerX, game.world.centerY);
				
				
				game.input.onDown.add(launchBall, this);
				
				score1Text = game.add.text(128, 128, '0', {
					font: "64px Gabriella",
					fill: "#ffffff",
					align: "center"
				});
				
				score2Text = game.add.text(game.world.width - 128, 128, '0', {
					font: "64px Bagriella",
					fill: "#ffffff",
					align: "center"
				});
				
				score1 = 0;
				score2 = 0;
				
				createText();
					
			}
			
			function update() {
				
				score1Text.text = score1;
				score2Text.text = score2;
				
				
				control_paddle(paddle1, game.input.y); 
				game.physics.arcade.collide(paddle1, ball, function(){
					game.sound.play('hit2');
				});
				game.physics.arcade.collide(paddle2, ball, function(){
					game.sound.play('hit2');
				});
				
				if(ball.body.blocked.left){
					//console.log('Player 2 scores');
					score2+=1;
					
				} else if (ball.body.blocked.right) {
					//console.log('Player 1 scores');
					
					score1+=1;
				}
				
				paddle2.body.velocity.setTo(ball.body.velocity.y);
				paddle2.body.velocity.x = 0; // makes the paddle not go left and right
				paddle2.body.maxVelocity.setTo(easyVelocity, easyVelocity);  // <----------- This line is not working
				
				console.log(paddle2.body.maxVelocity)
				
			} // end of update()
			
			// controls for paddle
			function control_paddle(paddle, y) {
				paddle.y = y;
				
				if(paddle.y < paddle.height / 2) {
					paddle.y = paddle.height / 2;
				} else if (paddle.y > game.world.height - paddle.height / 2) {
					paddle.y = game.world.height - paddle.height / 2;
				}
			}
			
			// create paddles
			function create_paddle(x, y) {
				var paddle = game.add.sprite(x, y, 'paddle');
				paddle.anchor.setTo(0.5, 0.5);
				game.physics.arcade.enable(paddle);
				paddle.body.collideWorldBounds = true;
				paddle.body.immovable = true;
				paddle.scale.setTo(0.5, 0.5);
				
				return paddle;
				
				
			}
			
			function createBall(x,y) {
				var ball = game.add.sprite(x, y, 'ball');
				ball.anchor.setTo(0.5, 0.5);
				game.physics.enable(ball);
				ball.body.collideWorldBounds = true;
				ball.body.bounce.setTo(1,1); // speed that it bounces when it hits something
				
				return ball;
			}
			
			function launchBall() {
				if(ballLaunched){
					ball.x = game.world.centerX;
					ball.y = game.world.centerY;
					ball.body.Velocity.setTo(0,0);  
					ballLaunched = false;
				} else {
					ball.body.velocity.x = -ballVelocity;
					ball.body.velocity.y = ballVelocity;
					ballLaunched = true;
				}
			}
	
	
}