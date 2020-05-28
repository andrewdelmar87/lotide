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
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  
};

console.log(assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), true));