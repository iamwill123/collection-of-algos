import factorial from '../../../src/lib/recursion/factorial/index';

const inputArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const outputArr = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

describe('Factorial', () => {
  inputArr.forEach((input, index) => {
    it(`should return ${outputArr[index]} when n is ${input}`, () => {
      expect(factorial(input)).toEqual(outputArr[index]);
    });
  });
});
