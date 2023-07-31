import fruitIntoBaskets from '../../../src/lib/iteration/fruitIntoBaskets/index';

describe('fruitIntoBaskets', () => {
  it('should return the maximum number of fruits that can be put into the baskets', () => {
    expect(
      fruitIntoBaskets({ fruits: ['A', 'B', 'C', 'A', 'C'], baskets: 2 }),
    ).toBe(3);
    expect(
      fruitIntoBaskets({ fruits: ['A', 'B', 'C', 'B', 'B', 'C'], baskets: 2 }),
    ).toBe(5);
    expect(
      fruitIntoBaskets({
        fruits: ['A', 'B', 'C', 'B', 'B', 'C', 'A', 'A', 'A'],
        baskets: 2,
      }),
    ).toBe(5);
  });

  it('should return 0 if no fruits are provided', () => {
    expect(fruitIntoBaskets({ fruits: [], baskets: 2 })).toBe(0);
  });

  it('should handle cases where the number of baskets is greater than the number of fruit types', () => {
    expect(fruitIntoBaskets({ fruits: ['A', 'B', 'C'], baskets: 5 })).toBe(3);
  });

  it('should handle cases where the number of baskets is less than the number of fruit types', () => {
    expect(
      fruitIntoBaskets({ fruits: ['A', 'B', 'C', 'D', 'E'], baskets: 2 }),
    ).toBe(2);
  });

  it('should handle cases where the number of baskets is 0', () => {
    expect(
      fruitIntoBaskets({ fruits: ['A', 'B', 'C', 'D', 'E'], baskets: 0 }),
    ).toBe(0);
  });
});
