import { encryptUsingReverse, encryptUsingCaesars, encryptUsingMorseCode, encryptUsingCaesarsV2 } from "./src/ciphers.js";

test("Caesars function works", () => {
	expect(encryptUsingCaesars("fries are the bomb", 13)).toBe("sevrf ner gur obzo");
});test("Caesars function 2 works", () => {
	expect(encryptUsingCaesarsV2("fries are the bomb", 13)).toBe("sevrf ner gur obzo");
});
test("Morse function works", () => {
	expect(encryptUsingMorseCode("morse code code")).toBe(
		"-- --- .-. ... . | -.-. --- -.. . | -.-. --- -.. ."
	);
});
test("Reverse function works", () => {
	expect(encryptUsingReverse("abc def ghi")).toBe("cba fed ihg");
});
