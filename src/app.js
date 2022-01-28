import readlineSync from "readline-sync";

const CaesarsCipher = Number(0);
const MorseCode = Number(1);
const Reverse = Number(2);
const Quit = Number(-1);

var ciphers = ["Caesars Cipher", "Morse Code", "Reverse"];

function secretMessages() {
	game: while (true) {
		var userMessage;
		var userMessageEncrypted;
		writeLine("Welcome to secret messages!");
		var chosenCipher = readlineSync.keyInSelect(
			ciphers,
			"What cipher would you like to use for encryption?"
		);
		switch (chosenCipher) {
			case CaesarsCipher:
				writeLine("You chose Caesars Cipher");
				userMessage = readlineSync.question("What is your string you want to encrypt? ");
				var offset = readlineSync.question("What is the offset? ");
				userMessageEncrypted = encryptUsingCaesars(userMessage, offset);
				break;
			case MorseCode:
				writeLine("You chose Morse Code");
				userMessage = readlineSync.question("What is your string you want to encrypt? ");
				userMessageEncrypted = userMessage.EncryptUsing(chosenCipher);
				break;
			case Reverse:
				writeLine("You chose Reverse");
				userMessage = readlineSync.question("What is your string you want to encrypt? ");
				userMessageEncrypted = userMessage.EncryptUsing(chosenCipher);
				break;
			case Quit:
				writeLine("You chose to quit ! BYE");
				break game;
		}
		writeLine('Your message = "' + userMessage + '"');
		writeLine('Your message encrypted = "' + userMessageEncrypted + '"');
		readlineSync.question("Press enter to continue . . .");
	}
}
function writeLine(string) {
	console.log(string);
}

String.prototype.EncryptUsing = function (cipher) {
	switch (cipher) {
		case CaesarsCipher:
			return encryptUsingCaesars(this);
		case MorseCode:
			return encryptUsingMorseCode(this);
		case Reverse:
			return encryptUsingReverse(this);
		default:
			writeLine("invalid cipher choice, no change occured");
			return this;
	}
};
function encryptUsingCaesars(message, offset) {
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
function encryptUsingMorseCode(message) {
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
function encryptUsingReverse(message) {
	var words = message.split(" ");
	var newOrder = [];
	for (var word of words) {
		newOrder.push(word.split("").reverse().join(""));
	}
	return newOrder.join(" ");
}
export { encryptUsingReverse, encryptUsingCaesars, encryptUsingMorseCode, secretMessages };
