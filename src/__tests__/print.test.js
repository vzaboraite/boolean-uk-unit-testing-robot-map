const { printPosition } = require("../print");

describe("The print position function", () => {
  it("should print the string with robot's current position", () => {
    const currentPosition = { x: 4, y: 3 };
    const output = `Robot is at { x: ${currentPosition.x}, y: ${currentPosition.y} }`;

    expect(printPosition(currentPosition)).toEqual(output);
  });
});
