import find_all_combinations from '../../../../src/lib/recursion/combinations/nCk/index';

const testCases = [
  {
    n: 4,
    k: 2,
    expected: [
      [3, 4],
      [2, 4],
      [2, 3],
      [1, 4],
      [1, 3],
      [1, 2],
    ],
  },
  {
    n: 4,
    k: 3,
    expected: [
      [2, 3, 4],
      [1, 3, 4],
      [1, 2, 4],
      [1, 2, 3],
    ],
  },
  {
    n: 5,
    k: 3,
    expected: [
      [3, 4, 5],
      [2, 4, 5],
      [2, 3, 5],
      [2, 3, 4],
      [1, 4, 5],
      [1, 3, 5],
      [1, 3, 4],
      [1, 2, 5],
      [1, 2, 4],
      [1, 2, 3],
    ],
  },
];

describe('find_all_combinations', () => {
  test.each(testCases)(
    `should return the correct combinations for n = $n and k = $k`,
    ({ n, k, expected }) => {
      const actual = find_all_combinations(n, k);
      expect(actual).toEqual(expected);
    }
  );
});
