// Tower Of Hanoi Problem,
// Given a number n, return the steps to move n disks from the first tower to the last tower.
// The rules are:
// 1. Only one disk can be moved at a time.
// 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
// 3. No larger disk may be placed on top of a smaller disk.

// Sample Input: 3
// Sample Output: [[1,3], [1,2], [3,2], [1,3], [2,1], [2,3], [1,3]]

const tower_of_hanoi = (n: number) => {
  // Write your code here.
  let result: number[][] = [];
  helper(result, n);
  return result;
};

function helper(result: number[][], n: number, src = 1, aux = 2, dst = 3) {
  if (n === 1) {
    result.push([src, dst]);
    return;
  } else {
    helper(result, n - 1, src, dst, aux);
    result.push([src, dst]);
    helper(result, n - 1, aux, src, dst);
  }
}

export default tower_of_hanoi;
