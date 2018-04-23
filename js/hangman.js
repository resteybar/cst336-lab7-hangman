var puzzles = new Array();
puzzles[0] = "Life of PI"; 
puzzles[1] = "Snake";

var div_used;
var div_puzzle;
var div_available;

var numStrikes = 0;
var puzzle;

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function initializeGame(){
	div_used = document.getElementById('used');
	div_puzzle = document.getElementById('puzzle');
	div_available = document.getElementById('available');
	
	setupButtons();
}

function startGame(){
	document.getElementById('splashScreen').style.display = 'none';
	document.getElementById('man').src = 'img/stick_0.png';
	newPuzzle();
}

function newPuzzle(){
	var puzzleID = Math.floor(Math.random() * puzzles.length);
	puzzle = puzzles[puzzleID].toUpperCase();
	
	div_puzzle.innerHTML = '';
	for (var i = 0; i < puzzle.length; i++){
		var box = document.createElement('div');
		box.id = 'letter_' + i;
		
		if (puzzle[i] == ' '){
			box.className = 'box';
		} else{
			box.className = 'box letter';
		}	
		div_puzzle.appendChild(box);
	}
}

function setupButtons(){
	for (var i = 0; i < alphabet.length; i++){
		var l = document.createElement('div');
		l.innerHTML = alphabet[i];
		l.className = 'btnLetter';
		l.onclick = function(){selectLetter(this);}
		div_available.appendChild(l);
	}
}

function selectLetter(selected){
	selected.style.display = 'none';
	
	var l = document.createElement('div');
	l.innerHTML = selected.innerHTML;
	l.className = 'lblUsed';
	div_used.appendChild(l);
	
	var letter = selected.innerHTML;
	var current = '';
	var correct = false;
	for(var i = 0; i < puzzle.length; i++){
		if (puzzle[i] == letter){
			document.getElementById('letter_' + i).innerHTML = letter;
			correct = true;
		} 
		if (document.getElementById('letter_' + i).innerHTML == '') current += ' ';
		else current += document.getElementById('letter_' + i).innerHTML;
	}
	
	if(current == puzzle) alert('You Won!');
	
	if(correct){
		l.style.backgroundColor = 'green';
	}
	else{
		l.style.backgroundColor = 'red';
		
		numStrikes++;
		document.getElementById('man').src = 'img/stick_' + numStrikes + '.png';
		if(numStrikes == 6) alert('You Lose. The Correct answer was: ' + puzzle);
	}
	
	if(current == puzzle){
		alert('You Won');
		newPuzzle();
		div_used.innerHTML = '';
		
		div_available.innerHTML = '';
		setupButtons();
	}
}

function hint(word){
	if (word == 'Life of PI'){
		alert('A book about a number.');
	}
	else if(word == 'Snake'){
		alert('It comes out of a pot when you play the flute.');
	}
}