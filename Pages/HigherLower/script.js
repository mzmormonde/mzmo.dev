
/* 
   Welcome to the Higher-Lower Game Project. 

   Try out the following functions that are 
   available to you (you can just call them
   in code or the console):
   
  // Returns the current value the user has 
  // entered into the guess input box.
  function getGuessInput()

  // Sets the current value  entered into the 
  // guess input box to 'value'.
  function setGuessInput(value)
 
  // Hides all messages shown to the user within
  // the "message-container" element.
  function hideAllMessages()

  // Hides all messages and then shows the one
  // with with the id attribute matching 'id' 
  // parameter.
  // Example: showMessage("higher-message")
  function showMessage(id)

  // Shows the remaining guess count.
  function showRemainingGuesses(value)
*/

// Initialize global variables needed by the program.
let magicNumber = -1;
let remainingGuesses = -1;


/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (100 - 1) + 1);
  
}


/* This function sets up a new game when called. 

     (1) Generate a magic number stored in 'magicNumber'.
     (2) Reset the remaining guess count.
     (3) Show the new guess count.
     (4) Hide any messages.

*/
function setupNewGame() {
  //get magic random number

  magicNumber = getRandomIntInclusive();
  console.log("Winning Number: " + magicNumber); 
  //reset guess count
  remainingGuesses = 5;
  showRemainingGuesses(remainingGuesses); 

  //hideAllMessages
  hideAllMessages(); 
}

// Handles when the user makes a new guess.
function handleGuess() {
  // Check if remaining guesses is -1 and setup a new game if so.
  if (remainingGuesses == -1) {
    setupNewGame();
  }
  // Check if the user has any remaining guesses and return if not.
  else if (remainingGuesses == 0) {
    return;
  }
  // Retreive the user's newest guess.
  let newGuess = getGuessInput();
  // Check if the user has won. We should show a message, set remaining guesses to 0, and return from this function.
  if (newGuess == magicNumber) {
    showMessage("win-message");
    remainingGuesses = 0;
    showRemainingGuesses(remainingGuesses); 
    return;
  }

  // Check if the guess is higher or lower and show appropriate message.
  else if (newGuess > magicNumber) {
    showMessage("lower-message"); 
  }
  else if (newGuess < magicNumber) {

    showMessage("higher-message");
  }
  // The user has used a guess, decrement remainin guesses and show the new value.
  remainingGuesses--;
  showRemainingGuesses(remainingGuesses); 

  // If the remaining guesses is 0, then the user has lost and that message should be shown.
  if (remainingGuesses == 0) {
    showMessage("lose-message");
  }
}


/* Function to be called when the user wants to play again.

      (1) Setup a new game.
      (2) Set the guess input to "".

*/
function handlePlayAgain() {
  
  document.getElementById("guess-input").value = "";
  setupNewGame();
}

  
// Returns the current value the user has 
// entered into the guess input box.
function getGuessInput() {
  // This will get the value of an input element with the id "guess-input".
  let guessString = document.getElementById("guess-input").value;

  // Converts the string to a number.
  let guessNumber = Number(guessString);
  

  // Returns the number. 
  return guessNumber;
}

// Sets the current value  entered into the 
// guess input box to 'value'.
function setGuessInput(value) {
  document.getElementById("guess-input").value = value;
}

// Hides all messages shown to the user within
// the "message-container" element.
function hideAllMessages() {
  // Find all message elements.
  let messages = document.querySelectorAll("#message-container > *");

  // Add the "hidden" class to each of the message elements.
  for (let i = 0; i < messages.length; i++) {
    messages[i].classList.add("hidden");
  }
}

// Hides all messages and then shows the one
// with with the id attribute matching 'id' 
// parameter.
// Example: showMessage("higher-message")
function showMessage(id) {

  // Hide all the messages.
  hideAllMessages();

  // Find the message with 'id'.
  let message = document.getElementById(id);
  if (message != null) {
    // Show the message.
    message.classList.remove("hidden");
  } else {
    console.log(`${id} does not exist.`);
  }
}

// Shows the remaining guess count.
function showRemainingGuesses(value) {
  document.getElementById("remining-guesses").innerHTML = value;
}


document.getElementById("homeSite").onclick = function () {
    location.href = "/index.html";
  };