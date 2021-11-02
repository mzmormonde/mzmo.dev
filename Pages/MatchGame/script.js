
/***  Project created during summer html/css/javascript course
     created using baseline code from professor
*/
function appendNewCard(parentElement) {
  // Make a variable for the card element. Assign it to a new div element.

  //console.log("in appendNewCard"); 
  const card = document.createElement("div");

  // Add the "card" class to the card element.

  card.classList.add("card");

  // Write the HTML for the children of the card element (card-down and card-up) as a normal 
  //string and assign it as the innerHTML of the card element.
  card.innerHTML = '<div class="card-down"></div><div class="card-up"></div>';


  // Append the card element to the parentElement, making the card element a "child".

  // let position = document.getElementById('card-container')[0]; 
  // position.appendChild(card); 
  parentElement.appendChild(card);
  // Return the card element.
  return card;
}
//TEST - RECOMMENT WHEN FINISHED
//appendNewCardTest();

/***  shuffleCardImageClasses()
 
OVERVIEW:
defined image classes in the CSS named 'image-1' through 'image-6' that, when applied to a card, 
will make it show that particular image when it's flipped.
 
INPUT/OUTPUT: 
Returns an array with 12 randomly ordered image classes 
*/
function shuffleCardImageClasses() {
  //console.log("in shuffleCardImageClasses"); 
  //Initialize an array of 2 of each image class strings in-order (e.g. "image-1", "image-1", "image-2"...)
  let array = ["image-1", "image-1", "image-2", "image-2", "image-3", "image-3", "image-4", "image-4", "image-5", "image-5", "image-6", "image-6"]
  /*  We're going to use a library to randomly "shuffle" the array we created. The library is called "underscore.js" because it uses an "_" charector as an object to contain helper methods.  Load underscore.js in your HTML via the CDN and then look at the "shuffle" method.  Note to ignore the "require" syntax as this is for non-browser environments (i.e. the var "_" will already be available to you from loading the CDN).
   
  CDN: https://cdnjs.com/libraries/underscore.js/1.4.1
   
  Shuffle: https://www.tutorialspoint.com/underscorejs/underscorejs_shuffle.htm
   */
  result = _.shuffle(array)

  //Return the shuffled array of class names.
  return result;
}
//shuffleCardImageClassesTest();


/***  createCards()
 
OVERVIEW:
For each of the 12 cards in the game, this function will create a card, 
assign it a random image class, and create an object to represent that card in our program.
 
INPUT/OUTPUT:  
The 'parentElement' parameter is the DOM element where the cards should be appended as children (i.e. #card-container). 
 
The 'shuffledImageClasses' parameter is an array of 12 image class strings (e.g. "image-1", "image-5", "image-3"...) randomly ordered and with 2 strings from each image class.
 
Returns an array of card objects to track all the cards for the rest of our program.
*/
function createCards(parentElement, shuffledImageClasses) {
  //console.log("in createCards"); 
  // Make an empty array to hold our card objects.
  let array = [];
  let cardObject = {};

  //Loop 12 times to create the 12 cards we need.
  for (let i = 0; i < 12; i++) {


    // Use appendNewCard to create/append a new card and store the result in a variable.
    let newCard = appendNewCard(parentElement);
    newCard.classList.add(shuffledImageClasses[i])
    // Add an image class to the new card element, using shuffledImageClasses[i].

    /* Create a new object representing this card. This should have properties for:
       "index" -- what iteration of the loop is this.
       "element" -- the dom element for the card
       "imageClass" -- the string of the image class on the card.
    */
    let cardObject = {
      index: i,
      element: newCard,
      imageClass: shuffledImageClasses[i]
    }
    //Append the new card object to the array of card objects.
    array.push(cardObject);
    //newCard.classList.add(image) ;
  }

  // Return the array of 12 card objects.
  return array;
}
//createCardsTest();


/***  doCardsMatch
 
OVERVIEW:
Given two card objects, this will check if the card objects show the same image when flipped.
 
INPUT/OUTPUT:  
The 'cardObject1' parameter is the first card object in the comparison.
 
The 'cardObject2' parameter is the second card object in the comparison.
 
The function should return 'true' when both cards have the same imageClass property and 'false' otherwise.
*/
function doCardsMatch(cardObject1, cardObject2) {
  //console.log("in doCardsMatch"); 
  if (cardObject1.imageClass === cardObject2.imageClass) {
    return true;
  } else {
    return false;
  }
}
//doCardsMatchTest();


/* An object used below as a dictionary to store counter names and their respective values.  Do you remember using objects as dictionaries? If not, go back to that lecture to review. */
let counters = {};


/***  incrementCounter 
 
OVERVIEW:
Adds one to a counter being displayed on the webpage (meant for counting flips and matches).
 
INPUT/OUPUT
The 'counterName' parameter is the string representing the name of the counter to increment (e.g. "flip").
 
The 'parentElement' parameter is the DOM element that shows the counter (e.g. <span id="flip-count"> in the HTML). The 'innerHTML' of this element determines what value is displayed for the counter.
 
This function should use the global 'counters' object above to store counter names and their respective values and update the DOM to show the new counter value when changed.
*/
function incrementCounter(counterName, parentElement) {
  //console.log("in incrementCounter"); 
  // If the 'counterName' property is not defined in the 'counters' object, add it with a value of 0.

  if (counters[counterName] === undefined) {
    counters[counterName] = 0;

  }
  // Increment the counter for 'counterName'.

  counters[counterName]++;

  //  Change the DOM within 'parentElement' to display the new counter value.
  parentElement.innerHTML = counters[counterName];

}

//incrementCounterTest();


/* Variables storing an audio objects to make the various sounds.  See how it's used for the 'click' sound in the provided function below.  */
let clickAudio = new Audio('/audio/click.wav');
let matchAudio = new Audio('/audio/match.wav');
let winAudio = new Audio('/audio/win.wav')


/***  flipCardWhenClicked  
OVERVIEW:
Attaches a mouseclick listener to a card (i.e. onclick), flips the card when clicked, and calls the function 'onCardFlipped' after the flip is complete.
 
INPUT/OUPUT
The 'cardObject' parameter is a custom card object we created in the 'createCards' function.
 
This function will make the card element associated with 'cardObject' clickable and call onCardFlipped with that cardObject after the flip is complete.
*/
function flipCardWhenClicked(cardObject) {
  //console.log("in flipCardWhenClicked"); 
  // Adds an "onclick" attribute/listener to the element that will call the function below.
  cardObject.element.onclick = function () {
    // THE CODE BELOW RUNS IN RESPONSE TO A CLICK.

    // Card is already flipped, return.
    if (cardObject.element.classList.contains("flipped")) {
      return;
    }

    // Play the "click" sound.
    clickAudio.play();

    // Add the flipped class immediately after a card is clicked.
    cardObject.element.classList.add("flipped");

    // Wait 500 milliseconds (1/2 of a second) for the flip transition to complete and then call onCardFlipped.
    setTimeout(function () {
      // THE CODE BELOW RUNS AFTER a 500ms delay.
      onCardFlipped(cardObject);
    }, 500);
  };
}


/* The 'onCardFlipped' function below will be called each time the user flips a card.  This variable is used to remember the first card flipped while we wait for the user to flip another card. It should be reset to 'null' each time a second card is flipped. */
let lastCardFlipped = null;


/***  flipCardWhenClicked
OVERVIEW:
This is called each time the user flips a card and should handle and track the game mechanics like: "Is this the first or second card flipped in a sequence?", "Do the cards match", and "Is the game over?"
 
INPUT/OUPUT
The 'newlyFlippedCard' parameter is a custom card object that has just been flipped.
*/
let flipCounter = 0;
let matchCounter = 0;

function onCardFlipped(newlyFlippedCard) {
  //console.log("in newlyFlippedCard"); 
  //  Add one to the flip counter UI.
  flipCounter++;
  document.getElementById("flip-count").innerHTML = flipCounter;

  //  If this is the first card flipped, then remember that card using the 'lastCardFlipped' variable and return (nothing else to do).
  if (flipCounter % 2 != 0) {
    lastCardFlipped = newlyFlippedCard;

  } else {
    // Otherwise, we know there are two cards flipped that should be stored in 'lastCardFlipped' and 'newlyFlippedCard'.
    // console.log("lastCardFlipped: " + lastCardFlipped); 
    // console.log("newlyFlippedCard: " + newlyFlippedCard)

    // If the cards don't match, then remove the "flipped" class from each, reset 'lastCardFlipped', and return.
    if (doCardsMatch(lastCardFlipped, newlyFlippedCard) != true) {
      if (newlyFlippedCard.element.classList.contains("flipped")) {
        newlyFlippedCard.element.classList.remove("flipped");
      }
      if (lastCardFlipped.element.classList.contains("flipped")) {
        lastCardFlipped.element.classList.remove("flipped");
      }

      lastCardFlipped = null;
      return;
    } else {
      // else if (lastCardFlipped === newlyFlippedCard) {
      // Otherwise, we have two matching cards.

      // Increment the match counter and optionally add a "glow" effect to the matching cards.
      matchCounter++;
      document.getElementById("match-count").innerHTML = matchCounter;

      // document.getElementById("div").style.borderStyle = "solid";
      // document.getElementById("div").style.borderColor = "pink";
      //  Play either the win audio or match audio based on whether the user has the number of matches needed to win.
      if (matchCounter == 6) {
        winAudio.play();
        //document.getElementById('winAudio').play();
      } else {
        matchAudio.play();
        //document.getElementById('matchAudio').play();

      }
    }



    // Reset 'lastCardFlipped'.
    lastCardFlipped = null;
  }

}


// Set up the game.
let cardObjects =
  createCards(document.getElementById("card-container"), shuffleCardImageClasses());

if (cardObjects != null) {
  for (let i = 0; i < cardObjects.length; i++) {
    flipCardWhenClicked(cardObjects[i]);
  }
}


document.getElementById("homeSite").onclick = function () {
  location.href = "/index.html";
};
document.getElementById("replay").onclick = function () {
  location.href = "index.html";
};