<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Phaser and Friends</title>
        
  <link href="css/styles.css" rel="stylesheet">
	</head>
  <body>
        <?php
      
        function sanitize($field) {
              $output = filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
              return $output;
        
        }
        
        function callQuery($pdo, $query) {
            
            try {
                return $pdo->query($query);
            } catch (PDOException $ex) {
                throw $ex;
            }  
        }
        
        $submitPressed = sanitize('submit');
        
        if(isset($submitPressed)) {
            $playerName = sanitize('name');
            
            echo '<h3>First name:' . $playerName . '</h3>';
        
        
        
        require 'dbConnect.php';

            try  {
                $pdo->beginTransaction();
                $query = "INSERT INTO player_scores (playerName) VALUES(?)";
                $s = $pdo->prepare($query);

                $s->execute([$playerName]);
                $pdo->commit();
            } catch (PDOException $ex) {
                $pdo->rollback();
                throw $ex;

            }
        }
        
      
      ?>
	<header>
            
            <div class="dropdown">
            <button onclick="dropdown()" class="dropbtn"></button>
              <div id="myDropdown" class="dropdown-content">
                <a href="index.php">Home</a>
                <a href="contact.php">Contact</a>
                <a href="index.php">Random Links</a>
              </div>
            </div>
            
			<img src="../images/phaserLogo.png" alt="Phaser and Friends" width="372px" height="224px">
			<p>Games so simple you'd think they were made by students</p>
        </header>
      
        
		
        <nav id="games">
            <ul class="games">
                <li id="pong"><a href="pong.php"></a></li>
                <li id="bird"><a href="bird.php"></a></li>
                <li id="snake"><a href="snake.php"></a></li>
                <li id="d"><a href="index.php"></a></li>
                <li id="e"><a href="index.php"></a></li>
                <li id="f"><a href="index.php"></a></li>
            </ul>
		</nav>
      
        <form action="" method="post">
            <label for="playerName">Player Name:</label>
            <input type="text" name="name" id="fName" value="">
            <br>

            <input type="submit" name="submit" value="Submit">
          
        </form>

		<div class="highScores">
			<h3>Leader Boards</h3>
		</div>

        <script src="js/mainPage.js"></script>
  </body>
</html>
