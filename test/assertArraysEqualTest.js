const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);