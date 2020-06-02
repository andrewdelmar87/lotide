const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 8 for [1, 2, 8, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 8, 4, 5]), [8]);
  });

  it("returns 'hi' for ['hey', 'hi', 'hello']", () => {
    assert.deepEqual(middle(['hey', 'hi', 'hello']), ['hi']);
  });

  it("returns [] for ['1', '2']", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});