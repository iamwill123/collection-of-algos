import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
  compare,
} from '../../helpers';
import { ArrayInput, SortInput, SortOutput } from '../../../types/sorts';

async function heap_sort(input: SortInput): Promise<SortOutput> {
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

  let i = Math.floor(n / 2 - 1); // find the last parent node in our heap
  let k = n - 1;

  while (i >= 0) {
    await heapify(arr, n, i, key, order);
    i--;
  }

  // swap first number with last
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]];
    await heapify(arr, k, 0, key, order);
    k--;
  }

  const sortedArr = arr;
  const _e = endTime();
  const execTimeInMs = howLongExecTook(_s, _e);

  return {
    arr: sortedArr,
    key,
    order,
    n,
    execTime: execTimeInMs,
    animate,
  };
}

function heapify(
  arr: ArrayInput,
  length: number,
  i: number,
  key: string,
  order: string,
): Promise<void> {
  return new Promise((resolve) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;

    // keep track of the largest index
    // check the left child
    if (left < length && compare(arr[left], arr[largest], key, order) > 0) {
      largest = left;
    }

    // check the right child
    if (right < length && compare(arr[right], arr[largest], key, order) > 0) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, length, largest, key, order).then(resolve);
    } else {
      resolve();
    }
  });
}

export default heap_sort;
