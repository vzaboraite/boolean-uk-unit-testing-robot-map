const { moveLeft, moveRight, moveUp, moveDown } = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {
    it("should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 4, y: 5 });
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 5 };

      expect(moveLeft(currentPosition)).toEqual({ x: 0, y: 5 });
    });
  });

  describe("The move right function", () => {
    it("should move the robot to the right by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 6, y: 5 };

      expect(moveRight(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 9, y: 5 };
      const nextPosition = { x: 9, y: 5 };

      expect(moveRight(currentPosition)).toEqual(nextPosition);
    });
  });

  describe("The move up function", () => {
    it("should move the robot up the grid by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 5, y: 4 };

      expect(moveUp(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5, y: 0 };
      const nextPosition = { x: 5, y: 0 };

      expect(moveUp(currentPosition)).toEqual(nextPosition);
    });
  });

  describe("The move down function", () => {
    it("should move the robot down the grid by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 5, y: 6 };

      expect(moveDown(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 5, y: 9 };
      const nextPosition = { x: 5, y: 9 };

      expect(moveDown(currentPosition)).toEqual(nextPosition);
    });
  });
});

describe("Test the diagonal movement functions", () => {
  describe("The move up-left function", () => {
    it("should move the robot diagonaly up-left by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 4, y: 4 };

      expect(moveUpLeft(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 0 };
      const nextPosition = { x: 0, y: 0 };

      expect(moveUpLeft(currentPosition)).toEqual(nextPosition);
    });
  });

  describe("The move up-right function", () => {
    it("should move the robot diagonaly up-right by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 6, y: 4 };

      expect(moveUpRight(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 9, y: 0 };
      const nextPosition = { x: 9, y: 0 };

      expect(moveUpRight(currentPosition)).toEqual(nextPosition);
    });
  });

  describe("The move down-left function", () => {
    it("should move the robot diagonaly down-left by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 4, y: 6 };

      expect(moveDownLeft(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 0, y: 9 };
      const nextPosition = { x: 0, y: 9 };

      expect(moveDownLeft(currentPosition)).toEqual(nextPosition);
    });
  });

  describe("The move down-right function", () => {
    it("should move the robot diagonaly down-right by one position", () => {
      const currentPosition = { x: 5, y: 5 };
      const nextPosition = { x: 6, y: 6 };

      expect(moveDownRight(currentPosition)).toEqual(nextPosition);
    });

    it("should not cross the boundaries", () => {
      const currentPosition = { x: 9, y: 9 };
      const nextPosition = { x: 9, y: 9 };

      expect(moveDownRight(currentPosition)).toEqual(nextPosition);
    });
  });
});
