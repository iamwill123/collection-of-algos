/**
 * @module fruitIntoBaskets
 * @description
 * The Fruit into Baskets problem is a classic sliding window problem.
 * Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only one type of fruit.
 * You can start with any tree, but once you have started you can’t skip a tree.
 * You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 * Write a function to return the maximum number of fruits in both the baskets.
 * @example
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 *
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 *
 * Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
 * Output: 5
 *
 * Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
 * This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
 *
 * @param {string[]} fruits - array of fruits
 * @returns {number} - maximum number of fruits in both the baskets
 **/

type InputType = {
  fruits: string[] | number[];
  baskets: number;
};
type FruitFrequencyType = {
  [key: string | number]: number;
};

const fruitIntoBaskets = ({ fruits = [], baskets = 2 }: InputType): number => {
  let n = fruits.length;
  let windowStart = 0;
  let maxFruits = 0;
  // a map of fruit type to its frequency
  let fruitFrequency: FruitFrequencyType = {};

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    // add the right fruit to the map of fruit frequency, if it doesn't exist, set it to 0
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    // increment it
    fruitFrequency[rightFruit]++;

    // "shrink" the sliding window, until we are left with 2 fruits in the fruit frequency map
    // why 2? because we can have only 2 baskets as our default
    while (Object.keys(fruitFrequency).length > baskets) {
      // get the left fruit
      const leftFruit = fruits[windowStart];
      // decrement the left fruit frequency
      fruitFrequency[leftFruit]--;
      // if the left fruit frequency is 0, delete it from the map
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      // shrink the window
      windowStart++;
    }
    // update the maxFruits
    // why windowEnd - windowStart + 1? because windowEnd is 0 based index
    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
};

export default fruitIntoBaskets;
