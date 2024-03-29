import climbStairs from '../../../src/lib/recursion/climbingStairs';

const testCases = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 5],
  [5, 8],
  [6, 13],
  [7, 21],
  [8, 34],
  [9, 55],
  [10, 89],
  [11, 144],
  [12, 233],
  [13, 377],
  [14, 610],
  [15, 987],
  [16, 1597],
  [17, 2584],
];

describe('climbStairs', () => {
  testCases.forEach(([steps, expected]) => {
    it(`should return ${expected} for ${steps} steps`, () => {
      expect(climbStairs(steps)).toBe(expected);
    });
  });
});
