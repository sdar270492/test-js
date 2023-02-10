// math.test.js
const math = require('./math');

describe('Test in math.js for toBe ', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });
  
  test('subtracts 2 - 1 to equal 1', () => {
    expect(math.subtract(2, 1)).toBe(1);
  });
  
  test('multiplies 2 * 3 to equal 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
  });
});

