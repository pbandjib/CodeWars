// Implement a function which multiplies two numbers.

const multiply = (a, b) => {
    return a * b
  }

// or

function multiply(a, b){
    return a * b
}

//sample test

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});
