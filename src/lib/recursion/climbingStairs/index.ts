/**
 * climbStairs function
 *
 * This function takes a single argument `n`, which represents the total number of stairs that need to be climbed.
 *
 * The function implements a dynamic programming approach to solve the problem of finding the number of distinct ways
 * you can climb a staircase where at each step you can either climb 1 or 2 steps.
 *
 * A cache is maintained to store the number of ways to climb i steps for all 1 <= i <= n. The cache uses a JavaScript object,
 * where the keys are the step counts, and the values are the number of ways to climb that many steps.
 *
 * The function checks if the number of ways to climb `n` stairs is already in the cache. If not, it calculates this value
 * recursively as the sum of the number of ways to climb `n - 1` stairs and `n - 2` stairs, and then stores this value in the cache.
 *
 * The base cases are when `n` is 1, 2, or 3, in which case the function returns `n` directly, because there are `n` ways to climb `n` stairs
 * under these conditions.
 *
 * The function returns the number of distinct ways you can climb to the top of the staircase with `n` steps.
 *
 * @param {number} n - The total number of stairs that need to be climbed.
 * @returns {number} The number of distinct ways to climb to the top of the staircase with `n` steps.
 *
 * @example
 *
 * climbStairs(2);
 * // Returns 2, because there are two ways to climb 2 stairs: one way is to climb 1 step twice, and the other way is to climb 2 steps at once.
 *
 * climbStairs(3);
 * // Returns 3, because there are three ways to climb 3 stairs: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.
 *
 * climbStairs(4);
 * // Returns 5, because there are five ways to climb 4 stairs: 1 + 1 + 1 + 1, 2 + 2, 1 + 2 + 1, 1 + 1 + 2, or 2 + 1 + 1.
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
