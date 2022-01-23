import readlineSync from "readline-sync";

const CaesarsCipher = 1;
const MorseCode = 2;
const Reverse = 3;
const Quit = 4;

function secretMessages() {
	var anwser = readlineSync("what is wrong");
}

var message = {
	encryptUsing(cipher, message) {
		switch (cipher) {
			case CaesarsCipher:
				break;
			case MorseCode:
				break;
			case Reverse:
				break;
			default:
				return message;
				return;
		}
	},
};

encryptUsing;
export { secretMessages };
