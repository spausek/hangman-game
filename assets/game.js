var pokemonArray = ["Pikachu", "Meowth", "Machoke", "Koffing", "Charmander", "Weedle", "Ekans", "Muk"];

//Choose Word at Random

 var randomNum = Math.floor(Math.random()*pokemonArray.length);

 var selectedPokemon = pokemonArray[randomNum];

 var underScore = [];

 var generateUnderscore = () => {

 	for (var i= 0; i < selectedPokemon.length; i++) {

 		underScore.push("_");
 		
 	}

 	return underScore;
 }

 console.log(generateUnderscore());


