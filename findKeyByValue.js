const findKeyByValue = function(bestTVShowsByGenre, show) {
  let array = Object.keys(bestTVShowsByGenre);

  return array;
}

// const assertEqual = function(actual, expected) {
//   let output = "";

//   if (actual === expected) {
//     output += (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     output += (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

//   return output;
// };

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

