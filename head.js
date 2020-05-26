const assertEqual = function(actual, expected) {
  
  let output = "";

  if (actual === expected) {
    output += (`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    output += (`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }

  console.log(output);
}

const head = function(arr) {
  return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

