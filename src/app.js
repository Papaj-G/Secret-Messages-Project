import readlineSync from "readline-sync";
import { writeLine } from "./utils.js";
import "./myPrototypes.js";
import * as constants from "./constants.js";

function secretMessages() {
	game: while (true) {
		var userMessage;
		var userMessageEncrypted;
		writeLine("Welcome to secret messages!");
		var chosenCipher = readlineSync.keyInSelect(
			constants.ciphers,
			"What cipher would you like to use for encryption?"
		);
		let title = getTitleForOption(chosenCipher);
		writeLine(title);
		if (chosenCipher == constants.Quit) break game;

		userMessage = readlineSync.question("What is your string you want to encrypt? ");

		if (chosenCipher == constants.CaesarsCipher) {
			var offset = readlineSync.question("What is the offset? ");
		}
		userMessageEncrypted = userMessage.EncryptUsing(chosenCipher, offset);

		writeLine('Your message = "' + userMessage + '"');
		writeLine('Your message encrypted = "' + userMessageEncrypted + '"');
		readlineSync.question("Press enter to continue . . .");
	}
}

function getTitleForOption(chosenCipher) {
	switch (chosenCipher) {
		case constants.CaesarsCipher:
			return "You chose Caesars Cipher";
		case constants.MorseCode:
			return "You chose morse code";
		case constants.Reverse:
			return "You chose reverse";
		case constants.Quit:
			return "You chose to quit ! BYE";
		default:
			return "invalid choice";
	}
}
export { secretMessages };
