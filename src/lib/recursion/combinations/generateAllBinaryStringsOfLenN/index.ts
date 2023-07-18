//

type CombinationsResult = string[];

type HelperProps = {
  n: number;
  slate: string;
  results: string[];
};

const generate_all_binary_strings_of_len_n = (
  n: number,
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
  // left side of the tree
  helper({ n: n - 1, slate: slate + '0', results });
  // right side of the tree
  helper({ n: n - 1, slate: slate + '1', results });
}

export default generate_all_binary_strings_of_len_n;
