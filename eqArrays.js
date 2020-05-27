const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output += (`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    output += (`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }

  return output;
};

const eqArrays = function(arr1, arr2) {
  let a = arr1.toString();
  let b = arr2.toString();

  return (a === b);
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));