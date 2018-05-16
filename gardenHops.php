<?php
if (!session_id()) { 
    session_start();   
}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Garden Hops</title>
		<script type="text/javascript" src="js/phaser.min.js"></script>
		<script type="text/javascript" src="js/gardenHops.js"></script>
		<link href="css/styles.css" rel="stylesheet">
        <link href="css/gardenHops.css" rel="stylesheet">
	</head>
	<body onload="gameStart()">
		<div class="top">
			<h1>Bunny Hops</h1>
                        <h2>Collect as many veggies as you can, but avoid the pots!</h2>
                        <h2>Use left and right arrows to move Barnaby Bunny</h2>
		</div>
		<div>
			<nav>
			<ul>
				<li><a href="index.php">Home</a></li>
				<li><a href="contact.php">Contact</a></li>
				<li><a href="index.php">Random Links</a></li>
			</ul>
		</nav>
		</div>
            <form action="" id="scoreForm" method="post">
           <input type="submit" name="submitScore" value="Submit Score">
        </form>
        <?php
        require 'dbConnect.php';

        $submitScore = sanitize('submitScore');
        
        if (isset($submitScore)) {
            $gameName = 'Bunny Hops';
            $playerScore = '0';
            $playerName = $_SESSION['userName'];

            try  {
                 $pdo->beginTransaction();
                 $query = "INSERT INTO player_scores (playerName, game_name, player_score) VALUES(?, ?, ?)";
                 $s = $pdo->prepare($query);

                 $s->execute([$playerName, $gameName, $playerScore]);
                 $pdo->commit();

             } catch (PDOException $ex) {
                 $pdo->rollback();
                 throw $ex;

             }    
        }
 
       ?>
	</body>
</html>