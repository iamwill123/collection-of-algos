/**
 * @param {number} n
 * @return {number}
 */

type ObjectType = {
  [key: number]: number;
};

let cache: ObjectType = {};

const climbStairs = (n: number): number => {
  if (n <= 3) return n;
  if (!cache[n]) {
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return cache[n];
};

export default climbStairs;
