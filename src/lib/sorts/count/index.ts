/*
count sort is a stable sort that is O(n) time complexity and O(n) space complexity (because it creates a new array to sort into).
*/

import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
} from '../../helpers';
import { SortInput, SortOutput } from '../../../types/sorts';

async function count(input: SortInput): Promise<SortOutput> {
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
    return { arr, key, order, n, execTime: 0, animate };
  }

  if (isAnObj(0, arr) && !key) throw new Error('key is required');

  let maxNum = Math.max(...arr.map((item) => (key ? item[key] : item)));
  let minNum = Math.min(...arr.map((item) => (key ? item[key] : item)));
  // get range for neg and pos numbers,
  // why + 1? because we need to include the max number in the range
  let range = maxNum - minNum + 1;
  let count = new Array(range).fill(0);
  let output = key ? new Array(n) : new Array(n).fill(0);

  // Store the frequency of each number mapped to the index, increment by 1
  // example
  // "freq at" 5
  // [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  // "freq at" 0
  // [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for (let i = 0; i < n; i++) {
    let num = key ? arr[i][key] : arr[i];
    count[num - minNum]++;
  }

  if (!isAsc(order)) {
    // Modify the count array to store the starting index of each element
    let sum = 0;
    for (let i = range - 1; i >= 0; i--) {
      sum += count[i];
      count[i] = sum;
    }
  } else {
    // Compute the cumulative frequency
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  }

  // Sort based on frequency, go in reverse order
  for (let i = n - 1; i >= 0; i--) {
    let num = key ? arr[i][key] : arr[i];
    // get the index of the current number in the count array
    let index = count[num - minNum] - 1;
    // set the output array at the index to the current number or object
    output[index] = arr[i];
    // decrement the count at the index
    count[num - minNum]--;
  }

  let sortedArr = output;
  const _e = endTime();
  const execTimeInMs = howLongExecTook(_s, _e);
  return { arr: sortedArr, key, order, n, execTime: execTimeInMs, animate };
}

export default count;
