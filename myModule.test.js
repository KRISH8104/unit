// myModule.test.js
const multiply = require('./myModule');

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies 0 * 5 to equal 0', () => {
  expect(multiply(0, 5)).toBe(0);
});

test('multiplies -4 * 2 to equal -8', () => {
  expect(multiply(-4, 2)).toBe(-8);
});

test('multiplies fractions 0.5 * 2 to equal 1', () => {
  expect(multiply(0.5, 2)).toBe(1);
});

test('multiplies by zero to always be zero', () => {
  expect(multiply(7, 0)).toBe(0);
});

test('multiplies large numbers', () => {
  expect(multiply(1000000, 2000000)).toBe(2000000000000);
});

// Test cases for edge cases
test('handles undefined values', () => {
  expect(multiply(undefined, 5)).toBeNaN();
});

test('handles null values', () => {
  expect(multiply(null, 5)).toBeNaN();
});

test('handles non-numeric values', () => {
  expect(multiply('abc', 5)).toBeNaN();
});


