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
				userMessage = readlineSync.question("What is your string you want to encrypt?");
				userMessageEncrypted = userMessage.EncryptUsing(chosenCipher);
				break;
			case MorseCode:
				writeLine("You chose Morse Code");
				userMessage = readlineSync.question("What is your string you want to encrypt?");
				userMessageEncrypted = userMessage.EncryptUsing(chosenCipher);
				break;
			case Reverse:
				writeLine("You chose Reverse");
				userMessage = readlineSync.question("What is your string you want to encrypt?");
				userMessageEncrypted = userMessage.EncryptUsing(chosenCipher);
				writeLine(userMessageEncrypted);
				break;
			case Quit:
				writeLine("You chose to quit ! BYE");
				break game;
		}
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
	function encryptUsingCaesars(message) {
		return message;
	}
	function encryptUsingMorseCode(message) {
		return message;
	}
	function encryptUsingReverse(message) {
		var words = message.split(" ");
		writeLine(words);
		var newOrder = [];
		for (var word of words) {
			writeLine(word);
			newOrder.push(word.split("").reverse().join(""));
		}
		writeLine(newOrder);
		return newOrder.join(" ");
	}
	export { encryptUsingCaesars, encryptUsingMorseCode, encryptUsingReverse };
};
export { EncryptUsing, secretMessages };
