const calcPoints = require("./Calc");
test("Calculates reward points by transaction amount", () => {
    expect(calcPoints(120)).toBe(90);
    expect(calcPoints(40)).toBe(0);
    expect(calcPoints(-10)).toBe(0);
    expect(calcPoints(1000)).toBe(1850);
});