const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let theMiddle = [];
  if (array.length <= 2) {
    return theMiddle;
  
  } else if (array.length % 2 === 0) {
    theMiddle.push(Math.floor(array[array.length / 2] - 1));
    theMiddle.push(Math.floor(array[array.length / 2]));
    return theMiddle;
  
  } else {
    const test = Math.floor(array.length / 2);
    theMiddle.push(array[test]);
    return theMiddle;
  }
};


module.exports = middle;
