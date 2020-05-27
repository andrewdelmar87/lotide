const eqArrays = function(arr1, arr2) {
  
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
  
};

const assertArraysEqual = function(arrA, arrB) {
  
  if (eqArrays(arrA, arrB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

const without = function(source, toRemove) {

  let output = [];

  for (let i = 0; i < source.length; i++) {
      if (source[i] !== toRemove[i]) {
        output.push(source[i]);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);