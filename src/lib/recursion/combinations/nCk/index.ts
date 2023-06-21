// N Choose K Combinations of a Set of Size N (nCk)
// #backtracking #recursion #combinations #n-choose-k #nCk #n-choose-k-combinations

// Given a set of size n, generate and print all possible combinations of k elements in the set.
type CombinationsResult = number[][];

type HelperProps = {
  nums: number[];
  target: number;
  i: number;
  slate: number[];
  results: any[];
};

const find_all_combinations = (n: number, k: any): CombinationsResult => {
  let results: CombinationsResult = [];
  let nums: number[] = [];
  // create an array of numbers from 1 to n
  for (let num = 1; num <= n; num++) {
    nums.push(num);
  }

  const props = { nums, target: k, i: 0, slate: [], results };
  helper(props);
  return results;
};

function helper(props: HelperProps): void {
  const { nums, target, i, slate, results } = props;
  // backtracking case
  if (slate.length === target) {
    // make a copy of the slate
    results.push([...slate]);
    return;
  }

  // base case
  if (i === nums.length) return;

  // recursive case
  helper({ nums, target, i: i + 1, slate, results });
  // include nums[i] in the slate
  slate.push(nums[i]);

  helper({ nums, target, i: i + 1, slate, results });
  // backtracking
  slate.pop();
}

export default find_all_combinations;
