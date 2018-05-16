<?php
session_start();
?>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Phaser and Friends</title>
        
  <link href="css/styles.css" rel="stylesheet">
	</head>
  <body>
        <?php

        require 'dbConnect.php';       
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
            
			<img src="images/phaserLogo.png" alt="Phaser and Friends" width="372px" height="224px">
			<p>Games so simple you'd think they were made by students</p>
        </header>

        <nav id="games">
            <ul class="games">
                <li id="pong"><a href="pong.php"></a></li>
                <li id="bird"><a href="bird.php"></a></li>
                <li id="snake"><a href="snake.php"></a></li>
                <li id="gHops"><a href="gardenHops.php"></a></li>
            </ul>
		</nav>
      
      <?php
      $submitPressed = sanitize('submit');
      
      if(!isset($submitPressed)) {
          ?>
        <form action="" method="post">
            <label for="playerName">Player Name:</label>
            <input type="text" name="name" id="name" value="">
            <br>

            <input type="submit" name="submitName" value="Submit">
          
        </form>
      
      <?php
      
        $gameName = sanitize('name');

        if(isset($gameName)) {

        $_SESSION['userName'] = $gameName;
      }
    }
            ?>
 

		<div class="highScores">
			<h3>Leader Boards</h3>
		</div>

 
      
     <table>
         <tr class="topScorez">
              <th>Name</th>
              <th>Game</th>
              <th>Score</th>
        </tr>
      
      <?php
      
      $queryScores = "SELECT * FROM player_scores";
      $findScores = callQuery($pdo, $queryScores);
      
      while ($leaderBoards = $findScores->fetch()) {
          $playerName = $leaderBoards['playerName'];
          $gameName = $leaderBoards['game_name'];
          $gameScore = $leaderBoards['player_score'];
      
          ?>
        
        <tr class="scorez">
            <td><?=  $playerName ?></td>
            <td><?=  $gameName ?></td>
            <td><?=  $gameScore ?></td>
        </tr>
        
        <?php
      }
        ?>

    
     </table>

        <script src="js/mainPage.js"></script>
  </body>
</html>
