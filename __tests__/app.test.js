const encryptUsingReverse = require("../src/app.js");
test("correctly reverses", () => {
	expect(encryptUsingReverse("abc def")).toBe("cba fed");
});
