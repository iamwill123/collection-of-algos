import { TypeCache } from 'src/types/recursion';

// Memoization is a technique for improving the performance of recursive functions.
let cache: TypeCache = {
  0: 1,
  1: 1,
};

// Fibonacci is a sequence of numbers in which each number is the sum of the two preceding numbers.
const fibonacci = (n: number): number => {
  if (cache[n]) return cache[n];
  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return cache[n];
};

export default fibonacci;
