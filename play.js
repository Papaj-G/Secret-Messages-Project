import {
	encryptUsingCaesarsV2,
	encryptUsingMorseCodeV2,
	encryptUsingReverse,
} from "./src/ciphers.js";
import { writeLine } from "./src/utils.js";

const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const encryptButton = document.getElementById("btnEncrypt").addEventListener("click", encrypt);

function encrypt() {
	// const radios = document.querySelectorAll("radio");
	// console.log(radios.length);
	// let selected;
	// for (const radio of radios) {
	// 	if (radio.checked) {
	// 		selected = radio.value;
	// 		break;
	// 	}
	// }
	// switch (selected) {
	// 	case "Caesar":
	// 		outputField.value = encryptUsingCaesarsV2(inputField.value);
	// 		break;
	// 	case "Morse":
	// 		outputField.value = encryptUsingMorseCodeV2(inputField.value);
	// 		break;
	// 	case "Reverse":
	// 		outputField.value = encryptUsingReverse(inputField.value);
	// 		break;
	// 	default:
	// 		outputField.value = encryptUsingReverse(inputField.value);
	// }
	if (document.getElementById("radio_Caesar").checked) {
		outputField.value = encryptUsingCaesarsV2(inputField.value);
	} else if (document.getElementById("radio_Morse").checked) {
		outputField.value = encryptUsingMorseCodeV2(inputField.value);
	} else if (document.getElementById("radio_Reverse").checked) {
		outputField.value = encryptUsingReverse(inputField.value);
	} else {
		outputField.value = "error";
	}
}
