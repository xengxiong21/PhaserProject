<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Phaser and Friends</title>
        
  <link href="css/styles.css" rel="stylesheet">
	</head>
  <body>
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
          <label id ="playerName" 
          
      </form>
      
		<div class="highScores">
			<h3>Leader Boards</h3>
		</div>

        <script src="js/mainPage.js"></script>
  </body>
</html>
