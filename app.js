const assert = require('assert');

function sum(a, b) {
  return a + b;
}

assert.strictEqual(sum(1, 2), 3, 'Test Case 1 Failed: 1 + 2 should be 3');
assert.strictEqual(sum(0, 0), 0, 'Test Case 2 Failed: 0 + 0 should be 0');
assert.strictEqual(sum(-1, 1), 0, 'Test Case 3 Failed: -1 + 1 should be 0');

console.log('All tests passed!');