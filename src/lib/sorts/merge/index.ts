/*
merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948. It is a comparison-based algorithm that focuses on how to merge together two pre-sorted arrays such that the resulting array is also sorted. The time complexity of merge sort is O(n log n) in the worst case and O(n log n) in the best case. The space complexity of merge sort is O(n).
*/

import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
} from '../../helpers';
import { ArrayInput, SortInput, SortOutput } from '../../../types/sorts';

async function merge_sort(input: SortInput): Promise<SortOutput> {
  const _s = startTime();
  const {
    arr,
    order = 'asc',
    key = '',
    callback = () => {},
    isSorting = () => true,
  } = input;
  const n: number = arr.length;
  let animate: boolean = false;

  if (n <= 1 || !isSorting()) {
    return { arr, key, order, n, execTime: 0, animate: false };
  }

  if (isAnObj(0, arr) && !key) throw new Error('key is required');

  if (n > Number.MAX_SAFE_INTEGER) {
    throw new Error('n is too large!');
  }

  const middle = Math.floor(n / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  const { arr: sortedLeft } = await merge_sort({ arr: left, order, key });
  const { arr: sortedRight } = await merge_sort({ arr: right, order, key });

  const merged = merge(sortedLeft, sortedRight, order, key);

  const _e = endTime();
  const execTimeInMs = howLongExecTook(_s, _e);

  return {
    arr: merged,
    key,
    order,
    n,
    execTime: execTimeInMs,
    animate,
  };
}

// compare the arrays item by item and return the concatenated result
function merge(
  left: ArrayInput,
  right: ArrayInput,
  order: string,
  key: string,
) {
  const merged: ArrayInput[] = [];
  let indexLeft: number = 0;
  let indexRight: number = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    const leftValue = key ? left[indexLeft][key] : left[indexLeft];
    const rightValue = key ? right[indexRight][key] : right[indexRight];
    // Todo: add animation logic
    // if (callback.length && isSorting()) {
    // 	animate = true
    // 	await callback(leftNum, rightNum) // animate swap
    // }
    if (
      (isAsc(order) && leftValue < rightValue) ||
      (!isAsc(order) && leftValue > rightValue)
    ) {
      merged.push(left[indexLeft]);
      indexLeft++;
    } else {
      merged.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, we add them to the result array as well (the items left are already sorted)

  const remainingLeft = left.slice(indexLeft);
  const remainingRight = right.slice(indexRight);

  return merged.concat(remainingLeft, remainingRight);
}

export default merge_sort;

// we can also use while loops instead
//  while (indexLeft < left.length) {
// 		result.push(left[indexLeft])
// 		indexLeft++
// 	}

// 	while (indexRight < right.length) {
// 		result.push(right[indexRight])
// 		indexRight++
// 	}
