/*
	Insertion sort, like selection sort, is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

	O(n^2) worst and avg case
	O(n) best case

	https://en.wikipedia.org/wiki/Insertion_sort

	In this sort, we start at the beginning of the array and assume that the first element is sorted. We then look at the next element, and insert it into the correct position in the sorted array. We accomplish this by shifting all of the elements that are larger than the new element to the right. We repeat this process for every element in the array, inserting it into the correct position in the sorted portion of the array.
*/

import {
  compare,
  endTime,
  howLongExecTook,
  isAsc,
  isDesc,
  startTime,
} from '../../helpers';
import { NumberOrObject, SortInput, SortOutput } from '../../../types/sorts';

async function insertion(input: SortInput): Promise<SortOutput> {
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

  if (n <= 1) {
    return { arr, key, order, n, execTime: 0, animate: false };
  }

  for (let i = 1; i < n; i++) {
    if (!isSorting()) {
      // Check if sorting is paused
      return { arr, key, order, n, execTime: 0, animate: false };
    }
    let currentVal = arr[i];
    // j is the index to the left of the current index
    let j = i - 1;

    // Go through the "sub-array" from right to left, comparing the current value to the next value to the left until we find the correct position for the current value, inserting larger numbers to the right, and inserting the current value to the right of the smallest number, until we reach the end of the array at 0.
    // if j is greater than or equal to 0 and the order is ascending otherwise descending
    while (j >= 0 && compare(arr[j], currentVal, key, order) > 0) {
      // shift larger numbers to the right
      arr[j + 1] = arr[j];
      if (callback.length && isSorting()) {
        animate = true;
        await callback(j, j + 1); // animate
      }
      j--;
    }

    // insert to the right of the smallest number
    arr[j + 1] = currentVal;
  }

  const _e = endTime();
  const execTimeInMs = howLongExecTook(_s, _e);
  return { arr, key, order, n, execTime: execTimeInMs, animate };
}

export default insertion;
