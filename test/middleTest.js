const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });  
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

// const assertArraysEqual = require('../assertArraysEqual');
// assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);