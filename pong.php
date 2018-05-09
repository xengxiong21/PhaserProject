<!DOCTYPE html>
<html>
    <head>
    <title>Pong</title>
    <script type="text/javascript" src="js/phaser.min.js"></script>
    <script type="text/javascript" src="js/pong.js"></script>
    <link href="css/styles.css" rel="stylesheet">
    </head>
    
   <body onload="gameStart()">
        <div class="top">
                <h1>Worse Pong Game</h1>
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
       <form action="" method="post">
            <input type="submit" name="submitScore" value="Submit Score">
        </form>
        <?php
        require 'dbConnect.php';

        $submitScore = sanitize('submitScore');
       
        if (isset($submitScore)) {
            $gameName = 'pong';
            $scorePlaceHolder = 1000;

            try  {
                 $pdo->beginTransaction();
                 $query = "INSERT INTO player_scores (playerName, game_name, player_score) VALUES(?, ?, ?)";
                 $s = $pdo->prepare($query);

                 $s->execute([$playerName, $gameName, $scorePlaceHolder]);
                 $pdo->commit();

             } catch (PDOException $ex) {
                 $pdo->rollback();
                 throw $ex;

             }    
        }
 
       ?>
       
	</body>
</html>