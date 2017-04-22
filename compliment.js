//This function should return a random word using Math.floor and Math.random.
function pickRandomWord(word){
	var randomword =  Math.floor(Math.random() * (word.length - 0)) + 0;
	return word[randomword];
}

//pickRandomWord(["test1", "test2", "test3"])

function generateCompliment(){
	var bodyParts = ["hair", "teeth", "ears"];
	var adjectives = ["beautiful","green", "wonderful"];
	var randomword = ["fish", "broom", "chicken"]
	var perfectCompliment = "boi your " + pickRandomWord(bodyParts) + " are like " + pickRandomWord(adjectives) + " " + pickRandomWord(randomword);
	console.log(perfectCompliment);
}


generateCompliment();