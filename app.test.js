import encryptUsingReverse from "./src/app.js";

test("correctly reverses", () => {
	expect(encryptUsingReverse("abc def ghi")).toBe("cba fed ihg");
});
