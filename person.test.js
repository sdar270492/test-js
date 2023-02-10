// person.test.js
const person = require('./person');

describe('Test in person.js for toEqual ', () => {
    test('person has correct name', () => {
      expect(person.name).toEqual('John Doe');
    });
    
    test('person has correct age', () => {
      expect(person.age).toEqual(30);
    });
    
    test('person has correct address', () => {
      expect(person.address).toEqual({
        street: '123 Main St',
        city: 'Anytown',
        state: 'NY'
      });
    });
});
