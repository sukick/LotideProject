const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}!== ${expected}`);
  }
};

const countLetters = function(string) {
  let countResult = {};
  for (const letter of string) {
  
    if (letter !== ' ') {
      if (countResult[letter]) {
        countResult[letter] += 1;
      } else {
        countResult[letter] = 1;
      }
    }
  } return countResult;
};

const testing = countLetters("lighthouse labs");
console.log(testing);