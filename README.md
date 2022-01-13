## Exercise: Robot Map

### Repo:

boolean-uk-unit-testing-robot-map

### Description:

In this exercise you will practice writing unit tests for a robot moving around a grid.

The edges of the grid are the boundaries, a robot cannot move across the boundary. For a 10 x 10 grid if the robot is at the coordinates `{ x: 10, y: 5 }` it should **not** be able to move right to `{ x: 11, y: 5 }`.

**Write _tests first_ using the TDD approach**

### Instructions:

- Export the starter template: https://codesandbox.io/s/unit-testing-robots-starter-5t7u3?file=/src/index.js
- Run `npm install`
- Run `npm start` to run the app when you want to
- Run `npm test` to run the Jest test suite

- Take a look at the `moveLeft` function and the tests inside `movement.test.js`
- Create tests for:
  - `moveRight`
  - `moveUp`
  - `moveDown`
- Create functions for:

  - `moveRight`
  - `moveUp`
  - `moveDown`

- Take a look at the `printPosition` function and create a test suite inside `print.test.js`

### Tips

- You can set the size of the grid with the `sizeOfGrid` object.

### Challenge

Create an _array of objects_ that are located on the grid.

`const objects = [ { x: 4, y: 3 }, {...} ]`

- The robot should not be able to move onto a coordinate where an object is located
- The robot should print "Ouch!" if it hits an object

Write the test scenarios first and then adjust the functions.
