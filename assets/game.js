var pokemonArray = ["Pikachu", "Meowth", "Machoke", "Koffing", "Charmander", "Weedle", "Ekans", "Muk"];

//Choose Word at Random

 var randomNum = Math.floor(Math.random()*pokemonArray.length);
 var rightLetter = []
 var wrongLetter = []


 var selectedPokemon = pokemonArray[randomNum];

 var underScore = [];

 var generateUnderscore = () => {

 	for (var i= 0; i < selectedPokemon.length; i++) {

 		underScore.push("_");
 		
 	}

 	return underScore;
 }

 console.log(generateUnderscore());

 //User Letter guesses
 document.addEventListener("keydown", (event) => {

 
 	var wordKey = String.fromCharCode(event.keyCode);
 	
 	if (selectedPokemon.indexOf(wordKey) > -1) {

 		
 	}




 });

 // Right array

 // Wrong Array


