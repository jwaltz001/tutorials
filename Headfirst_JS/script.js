//variables needed
var location1;
var location2;
var location3;

var guess;
var hits = 0;
var numOfGuesses = 0;
var isSunk = false;
//Game Logic
while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6) :");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid number!");
  } else {
    numOfGuesses = numOfGuesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
      alert("Hit!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("Miss!");
    }
  }
}
//Give user final report of how they did
var stats = "You took " + numOfGuesses + " guesses to sink the batlleship, " + "which means your shooting accuracy was " + 3/numOfGuesses;
alert(stats);
