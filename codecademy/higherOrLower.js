function guessNumber(number) {
  // Prompt the user for a number
  guess = prompt("Guess a number between 1 and 100");

  // Convert their guess to a number using +
  guess = +guess;

  // Define base case
  if (guess === number) {
	return console.log("You got it! The number was " + number);
  }
  // Define recursive case with a function call
  guessNumber(number);
}
