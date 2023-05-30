import fibonacci from '../../../src/lib/recursion/fibonacci';

const inputArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const outputArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

describe('Fibonacci', () => {
  inputArr.forEach((input, index) => {
    it(`should return ${outputArr[index]} when n is ${input}`, () => {
      expect(fibonacci(input)).toEqual(outputArr[index]);
    });
  });
});
