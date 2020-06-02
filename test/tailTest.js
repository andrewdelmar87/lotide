const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('Returns 5 for ["Yo Yo", "Lighthouse", "Labs", "hello", "hi", "heyo"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "hello", "hi", "heyo"]), 5);
  });
  
  it('Returns 2 for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), 2);
  });
});