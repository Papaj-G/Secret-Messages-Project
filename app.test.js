import { encryptUsingReverse, encryptUsingCaesars, encryptUsingMorseCode } from "./src/app.js";

test("Caesars function works", () => {
	expect(encryptUsingCaesars("fries are the bomb")).toBe("sevrf ner gur obzo");
});
test("Morse function works", () => {
	expect(encryptUsingMorseCode("morse code code")).toBe(
		"-- --- .-. ... . | -.-. --- -.. . | -.-. --- -.. ."
	);
});
test("Reverse function works", () => {
	expect(encryptUsingReverse("abc def ghi")).toBe("cba fed ihg");
});
