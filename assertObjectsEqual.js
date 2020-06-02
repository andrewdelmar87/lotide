const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1[key].constructor === Array) {
        if (object1[key].length !== object2[key].length) {
          return false;
        }
        for (let i = 0; i === object1[key].length - 1; i++) {
          if (object1[key][i] !== object2[key][i]) {
            return false;
          }
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let output = "";

  if (actual === expected) {
    output += (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (actual !== expected) {
    output += (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return output;
  
};

module.exports = assertObjectsEqual;

// console.log(assertObjectsEqual(eqObjects([1, 4, 3], [1, 2, 3]), false));
