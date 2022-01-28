import { encryptUsingCaesars, encryptUsingMorseCode, encryptUsingReverse } from "./ciphers.js";
import { CaesarsCipher, MorseCode, Reverse } from "./constants.js";
String.prototype.EncryptUsing = function (cipher, offset = 0) {
	switch (cipher) {
		case CaesarsCipher:
			return encryptUsingCaesars(this, offset);
		case MorseCode:
			return encryptUsingMorseCode(this);
		case Reverse:
			return encryptUsingReverse(this);
		default:
			writeLine("invalid cipher choice, no change occured");
			return this;
	}
};