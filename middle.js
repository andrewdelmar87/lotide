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

const middle = function(array) {
  
  let output = [];
  const mid = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) {
    output.push(array[mid]);
  } else {
    output = array.slice(mid - 1, mid + 1);
  };
  
  if (array.length <= 2) {
    output = [];
  }
  return output;
};

console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5])) 