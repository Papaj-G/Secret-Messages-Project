import { alphabet } from "./constants.js";
export function writeLine(string)
{
	console.log(string);
}
export function reverseString(str) {
	return str.split("").reverse().join("");
}
export function rotateAlphabet(offset) {
	let alphabetRotated = alphabet.slice();
	for (var i = 0; i < offset; i++) {
		alphabetRotated.push(alphabetRotated.shift());
	}
	return alphabetRotated;
}