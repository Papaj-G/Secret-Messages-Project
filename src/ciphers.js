import { reverseString, writeLine, rotateAlphabet } from "./utils.js";
import { morse, alphabet } from "./constants.js";
export function encryptUsingCaesars(message, offset) {
	var encryptedMessage = [];
	//initialise alphabet array

	//clone alphabet
	var alphabetEncrypted = alphabet.slice();
	//shift cloned alphabet by offset to create translation key
	for (var i = 0; i < offset; i++) {
		alphabetEncrypted.push(alphabetEncrypted.shift());
	}
	writeLine(alphabet);
	writeLine(alphabetEncrypted);
	// get words of sentence
	var words = message.split(" ");
	//for each word in sentance
	for (var word of words) {
		//create new word
		var newWord = "";
		//for each letter in word
		for (var letter of word) {
			//get index of letter in alphabet
			var index = alphabet.indexOf(letter);
			//using index get same index location in encrypted alphabet and concat letter to new word
			newWord += alphabetEncrypted[index];
		}
		//add encrypted word to encrypted string array
		encryptedMessage.push(newWord);
	}
	//retrun and join words in encrypted word array with spaces and return as string
	return encryptedMessage.join(" ");
}

export function encryptUsingMorseCode(message) {
	var encryptedMessage = [];
	//initialise alphabet array

	// get words of sentence
	var words = message.split(" ");

	var array = [1, 2, 3].map((n) => n * 2);

	//for each word in sentance
	for (var word of words) {
		//create new word
		var newWord = [];
		//for each letter in word
		for (var letter of word) {
			//get index of letter in alphabet
			//using index get same index location in encrypted alphabet and concat letter to new word
			newWord.push(morse[letter]);
		}
		//add encrypted word to encrypted string array
		encryptedMessage.push(newWord.join(" "));
	}
	//retrun and join words in encrypted word array with spaces and return as string
	return encryptedMessage.join(" | ");
}
// little change
export function encryptUsingReverse(message) {
	return message
		.split(" ")
		.map((word) => reverseString(word))
		.join(" ");
}
export function encryptUsingMorseCodeV2(message) {
	return message
		.split(" ")
		.map((word) =>
			word
				.split("")
				.map((letter) => morse[letter])
				.join(" ")
		)
		.join(" | ");
}
export function encryptUsingCaesarsV2(message, offset = 13) {
	var alphabetEncrypted = rotateAlphabet(offset);
	return message
		.split(" ")
		.map((word) =>
			word
				.split("")
				.map((letter) => alphabetEncrypted[alphabet.indexOf(letter)])
				.join("")
		)
		.join(" ");
}
