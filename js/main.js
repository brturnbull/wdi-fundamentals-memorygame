console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}

}

var flipCard = function(cardId) {


	checkForMatch();

	console.log("User flipped " + cards[cardId]) 
	cardsInPlay.push(cards[cardId]);

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2) { 

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!") 
	} else {
		alert("Sorry, try again.")
	}

} 

}

	flipCard(0);
	flipCard(2);	


