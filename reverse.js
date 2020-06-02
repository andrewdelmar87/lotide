'use strict';
const reverse = function () {
for (let j = 0; j < process.argv.length; j++) {
  let s = "";
  s += this.substring(j-1,j);
  j--;
};
};

module.exports = reverse;