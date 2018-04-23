<!DOCTYPE html>
<html>
	<head>
		<title>Hang Man</title>
		 <link rel="stylesheet" type="text/css" href="css/styles.css">
		<script language="javascript" type="text/javascript" src="js/hangman.js"></script>
	</head>
	<body onload = "initializeGame()">
		<div id="gameWindow">
			<img id="man" src="img/stick_6.png">
			<div id="main">
				<div id="splashScreen">
					<h1>Hang Man</h1>
					<div id="btnStart" class="button" onclick="startGame()">Start</div>
				</div>
				<div id="gameBoard">
					<div id="used" class="panel"></div>
					<div id="puzzle" class="panel"></div>
					<div id="available" class="panel"></div>
					<div id="hint" class = "hbtn" onclick = "hint(puzzle)"><font color = "white">Click for hint</font></div>
				</div>
			</div>
		</div>
	</body>
</html>