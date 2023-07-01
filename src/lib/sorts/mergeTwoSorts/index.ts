// This function merges two sorted arrays into one sorted array in O(n) time and O(n) space complexity (where firstLen is the length of the first array) by using three pointers (one for first, two for second array) and a main pointer (for the second array) to keep track of the current index of the second array. The first pointer starts at the end of the first array, the second pointer starts at the end of the second array, and the main pointer starts at the end of the second array (after adding in firstLen of 0s to second array). The first pointer is used to compare with the second pointer, and the larger of the two is placed at the main pointer index. The main pointer is then decremented. This process is repeated until the first pointer is less than 0. If there are remaining elements in the first array, they are moved to the second array.

import { endTime, howLongExecTook, isAsc, startTime } from '../../helpers';
import { MergeTwoSortsInput, SortOutput } from '../../../types/sorts';

function merge_first_sorted_into_second_sorted(
  input: MergeTwoSortsInput,
): SortOutput {
  const _s = startTime();
  const { first = [], second = [], order = 'asc', key = '' } = input;

  let firstLen = first.length,
    firstPointer = firstLen - 1,
    secondLen = second.length,
    secondPointer = secondLen - 1, // should start where the second array numbers end
    secondArray = (second as any[]).concat(
      key.length && typeof key === 'string'
        ? Array.from({ length: firstLen }, () => ({ [key]: 0 }))
        : Array.from({ length: firstLen }, () => 0),
    ),
    mainPointer = secondArray.length - 1; // start at the end of the secondArray

  const firstArray = first;

  const swapCondition = (a: any, b: any): boolean =>
    isAsc(order) ? a >= b : a <= b;

  while (firstPointer >= 0 && secondPointer >= 0) {
    let condition = key
      ? swapCondition(
          firstArray[firstPointer][key],
          secondArray[secondPointer][key],
        )
      : swapCondition(firstArray[firstPointer], secondArray[secondPointer]);

    if (condition) {
      secondArray[mainPointer] = firstArray[firstPointer];
      firstPointer--, mainPointer--;
    } else {
      secondArray[mainPointer] = secondArray[secondPointer];
      secondPointer--, mainPointer--;
    }
  }

  // if there are remaining elements in firstArray, move them to secondArray
  while (firstPointer >= 0) {
    secondArray[mainPointer] = firstArray[firstPointer];
    firstPointer--, mainPointer--;
  }

  return {
    arr: secondArray,
    key,
    order,
    n: secondArray.length,
    execTime: howLongExecTook(_s, endTime()),
  };
}

export default merge_first_sorted_into_second_sorted;
