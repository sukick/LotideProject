# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sukick/lotide`

**Require it:**

`const _ = require('@sukick/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: Compares two arrays to see if they are the same, this function will print out the result after comparison.
* `assertEqual()`: Compares two values to see if they are the same, this function will print out the result after comparison.
* `assertObjectsEqual()`: Compares two objects to see if they are the same.
* `countLetters()`: Count the number of letters in a string that is inputted.
* `countOnly()`: Take in a collection of items and return counts for how many times these items appeared, for example strings.
* `eqArrays()`: Compare two arrays and see if they are equal.
* `eqObjects()`: Compare two objects and see if they are equal.
* `findKeyByValue()`: The function takes in an object and value, then scan the object and return key that contains the given value.
* `head()`: Retrieve the first element of an array.
* `map()` : Return a new array according to the result of callback function.
* `middle()`: Retrieve the middle element of an array.
* `tail()`: Retrieve every single element except for the first element of an array.
* `letterPosition()`: Return all the indices (zero-based positions) in the string where each character is found.
* `without()`: Return a subset of an array after removing unwanted elements.
