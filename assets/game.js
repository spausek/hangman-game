var pokemonArray = ["pikachu", "meowth", "charmander", "koffing"];

//Variables


 var rightGuess = [];

 var wrongGuess = [];
 var wins = 0;
 var losses = 0;
 var playerGuess = [];
 var randomPokemon;
 var underScore = [];
 var correctLetter = 0;
 var pokeBalls = 6;
 var rightGuess = [];
 var wrongGuess = [];

 //Function Time!






function choosePokemon(){

	  randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
	  console.log(randomPokemon);

 	for(var i = 0; i < randomPokemon.length; i++) {

 		underScore.push( " _ ");

 		document.getElementById("word-in-play").textContent = underScore.join(" ");

 		
 		 		
 		}

 	document.getElementById("wins").textContent = wins;
 	document.getElementById("losses").textContent = losses;
 	document.getElementById("poke-balls").textContent = pokeBalls;

}






document.onkeyup = function(event) {


    if (!(event.which <= 90 && event.which >= 65)) return

	userInput = event.key


 
 if (randomPokemon.indexOf(userInput) > -1) {

		for(var i = 0; i < randomPokemon.length; i ++) {

			if(randomPokemon[i] === userInput) {
				

			underScore[i] = userInput;
			console.log(underScore);
			correctLetter ++;
			console.log(correctLetter);
			winOrLose();
			document.getElementById("word-in-play").textContent = underScore.join(" ");
			


			}	
		}
	}

	else {
		wrongGuess.push(userInput);
		pokeBalls --;
		document.getElementById("poke-balls").textContent = pokeBalls;
		document.getElementById("wrong-letter").textContent = wrongGuess;
		winOrLose();

		}
	}
	
	function winOrLose (){
		if (correctLetter === randomPokemon.length) {
			setTimeout(function(){
			alert("You win!");
			wins ++;
			document.getElementById("wins").textContent = wins;
			document.getElementById("word-in-play").textContent = ("    ");
			wrongGuess= [];
			document.getElementById("wrong-letter").textContent = (" ")

			}, 500);

						

		}

		else if (pokeBalls === 0) {
			
			setTimeout(function(){
			alert("You Lose");
			wrongGuess = [];
			losses ++;
			document.getElementById("losses").textContent = losses;

			}, 500);
			 

		}

	}

	//reset




	
choosePokemon();




	 	

 	