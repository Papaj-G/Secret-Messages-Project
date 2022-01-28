import { reverseString } from "./utils.js";

export function encryptUsingCaesars(message, offset) {
	var encryptedMessage = [];
	//initialise alphabet array
	var alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	//clone alphabet
	var alphabetEncrypted = alphabet.slice();
	//shift cloned alphabet by offset to create translation key
	for (var i = 0; i < offset; i++) {
		alphabetEncrypted.push(alphabetEncrypted.shift());
	}
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
	var morse = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--.",
		q: "--.-",
		r: ".-.",
		s: "...",
		t: "-",
		u: "..-",
		v: "...-",
		w: ".--",
		x: "-..-",
		y: "-.--",
		z: "--..",
		1: ".----",
		2: "..---",
		3: "...--",
		4: "....-",
		5: ".....",
		6: "-....",
		7: "--...",
		8: "---..",
		9: "----.",
		0: "-----",
	};

	// get words of sentence
	var words = message.split(" ");
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
export function encryptUsingReverse(message) {
	return message
		.split(" ")
		.map((word) => reverseString(word))
		.join(" ");
}