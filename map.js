const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`)
  }
}

const eqArrays = function(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, function(word) {
  return word.length;
});

let callback = function(word) {
  return word[word.length - 1];
}

const results3 = map(words, callback); 

assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[2,3,4,5,6]);
assertArraysEqual(results3,['a','b','d','g','k']);
