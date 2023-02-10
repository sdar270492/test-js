// string.test.js
const { formatEmail, getNameUndefined, getNameNull, getName, getNames } = require('./string');

describe('Test in string.js for toMatch ', () => {
    test('formatEmail returns correct value', () => {
        expect(formatEmail('john.doe@example.com')).toMatch(/^\w+\.\w+@\w+\.\w+$/);
        expect(formatEmail('jane.doe@example.com')).toMatch(/^\w+\.\w+@\w+\.\w+$/);
      });
});

describe('Test in string.js for toBeUndefined ', () => {
    test('getName returns correct value', () => {
        expect(getNameUndefined('John')).toBe('John');
        expect(getNameUndefined()).toBeUndefined();
      });
});

describe('Test in string.js for toBeNull ', () => {
    test('getName returns correct value', () => {
        expect(getNameNull('John')).toBe('John');
        expect(getNameNull()).toBeNull();
      });
});

describe('Test in string.js for toContain ', () => {
    test('getName returns correct value', () => {
        expect(getName('John')).toBe('John');
        expect(getName('John')).toContain('oh');
      });
});

describe('Test in string.js for arrayContaining and stringContaining', () => {
    test('getNames returns correct array of names', () => {
        const names = getNames();
        expect(names).toEqual(expect.arrayContaining(['John', 'Jane', 'Jim']));
        expect(names.join(', ')).toEqual(expect.stringContaining('Jane'));
      });
});