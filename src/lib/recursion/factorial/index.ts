import { TypeCache } from 'src/types/recursive';

// Memoization is a technique for improving the performance of recursive functions.
let cache: TypeCache = {
  0: 1,
};

// Factorial is the product of an integer and all the integers below it.
const factorial = (n: number): number => {
  if (cache[n]) return cache[n];
  cache[n] = n * factorial(n - 1);
  return cache[n];
};

export default factorial;
