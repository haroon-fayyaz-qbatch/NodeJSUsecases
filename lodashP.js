const _ = require("lodash");

const arr = ["a", "b", "c", "d"];

// divide the array in seperate chunks of passed paramter
let arrChunk = _.chunk(arr, 3);

console.log(arrChunk);

// create an array after removing falsy values

console.log(_.compact(arr));

//concat creates a new array with additional arrays or values

const con = _.concat(arrChunk, 3, 43);

console.log(con);

// difference create an array with values included in the passed array
console.log(_.difference(arr, ["a"]));

console.log(_.differenceBy([3.9, 2.21, 3.8], [2.3], Math.floor));

//drop n elements. By default the value is 1
console.log(_.drop(arr, 2));

//drop right, drop n elements from the end

//dropRightWhile excludes elements from the end. Elements are dropped until predicate returns falsey.

//fills elements of array with value from start upto end of

console.log(_.fill(arr, "*", 1, 4));
