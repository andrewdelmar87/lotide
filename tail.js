const assertEqual = require('./assertEqual');
let output = [];
const tail = function(arr) {
  if (arr.length >= 2) {
    output = arr.slice(1);
  } else {
    output;
  }
  return output.length;
};

let words = ["Yo Yo", "Lighthouse", "Labs", "hello", "hi", "heyo"];
 // no need to capture the return value since we are not checking it
console.log(assertEqual(tail(words)), 3); // original array should still have 3 elements!