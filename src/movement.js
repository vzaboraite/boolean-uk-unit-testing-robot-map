const moveLeft = (currentPosition) => {
  if (currentPosition.x === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
  };

  return newPosition;
};

const moveRight = (currentPosition) => {
  if (currentPosition.x === 9) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
  };

  return newPosition;
};

const moveUp = (currentPosition) => {
  if (currentPosition.y === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y - 1,
  };
  return newPosition;
};

const moveDown = (currentPosition) => {
  if (currentPosition.y === 9) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y + 1,
  };

  return newPosition;
};

const moveUpLeft = (currentPosition) => {
  if (currentPosition.x === 0 && currentPosition.y === 0)
    return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
    y: currentPosition.y - 1,
  };

  return newPosition;
};

const moveUpRight = (currentPosition) => {
  if (currentPosition.x === 9 && currentPosition.y === 0)
    return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
    y: currentPosition.y - 1,
  };

  return newPosition;
};

const moveDownLeft = (currentPosition) => {
  if (currentPosition.x === 0 && currentPosition.y === 9)
    return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
    y: currentPosition.y + 1,
  };

  return newPosition;
};

const moveDownRight = (currentPosition) => {
  if (currentPosition.x === 9 && currentPosition.y === 9)
    return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
    y: currentPosition.y + 1,
  };

  return newPosition;
};

module.exports = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  moveUpLeft,
  moveUpRight,
  moveDownLeft,
  moveDownRight,
};
