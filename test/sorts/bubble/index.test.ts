import bubble from '../../../src/lib/sorts/bubble';

describe('bubble sort', () => {
  test('should sort an array of numbers', () => {
    expect(bubble([5, 3, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  });
})