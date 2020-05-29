const findKey = (objects, callback) => {

  for (let keys in objects) {
    if (callback(objects[keys])) {
      return keys;
    }
  }
};

const assertEqual = function(actual, expected) {
  let output = "";

  if (actual === expected) {
    output += (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    output += (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return output;
};

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "Ora"));

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));