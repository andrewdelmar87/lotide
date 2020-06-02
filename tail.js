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
console.log(tail(["Yo Yo", "Lighthouse", "Labs", "hello", "hi", "heyo"]))
module.exports = tail;