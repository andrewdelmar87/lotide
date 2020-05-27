const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output += (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    output += (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return output;
};

const eqArrays = function(arr1, arr2) {
  
  return JSON.stringify(arr1)==JSON.stringify(arr2);

};

console.log(assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), true));