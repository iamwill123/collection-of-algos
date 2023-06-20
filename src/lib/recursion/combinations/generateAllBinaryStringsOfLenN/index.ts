// N Choose K Combinations of a Set of Size N (nCk)
// #backtracking #recursion #combinations #n-choose-k #nCk #n-choose-k-combinations

// Given a set of size n, generate and print all possible combinations of k elements in the set.
type CombinationsResult = string[];

type HelperProps = {
  n: number;
  slate: string;
  results: string[];
};

const generate_all_binary_strings_of_len_n = (
  n: number
): CombinationsResult => {
  let results: CombinationsResult = [];
  let startString = '';

  const props = { slate: (startString = ''), n, results };
  helper(props);
  return results;
};

function helper(props: HelperProps): void {
  const { n, slate, results } = props;

  // base case
  if (n === 0) {
    results.push(slate);
    return;
  }

  // recursive case
  helper({ n: n - 1, slate: slate + '0', results });
  helper({ n: n - 1, slate: slate + '1', results });
}

export default generate_all_binary_strings_of_len_n;
