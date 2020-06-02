const middle = function(array) {
  
  let output = [];
  const mid = Math.floor(array.length / 2);


  if (array.length <= 2) {
    output;
  } else if (array.length % 2 === 0) {
    output.push(array[mid - 1], array[mid]);
  } else {
    output.push(array[mid]);
  }
  return output;
};
console.log(middle([1, 2, 8, 4, 5]));

module.exports = middle;