const assertEqual = function(actual, expected) {
  let output = "";

  if (actual == expected) {
    output += (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual != expected) {
    output += (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return output;
};

const countLetters = function(string) {
  const finalString = string.split(' ').join('');
  const output = {};

  for (let letter of finalString) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;

console.log(assertEqual(countLetters("this is a a test")["t"], "3"));
console.log(countLetters("this is a a test"));