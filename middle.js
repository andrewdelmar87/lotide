const middle = function(array) {
  
  let output = [];
  const mid = Math.floor(array.length / 2);

  if (array.length % 2 !== 0) {
    output.push(array[mid]);
  } else {
    return output = array.slice(mid - 1, mid + 1);
  };
  
  if (array.length <= 2) {
    return output = [];
  }
  return output;
};

module.exports = middle;