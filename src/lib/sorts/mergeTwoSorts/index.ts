import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
} from '../../helpers';
import { MergeTwoSortsInput, SortOutput } from '../../../types/sorts';

function merge_first_sorted_into_second_sorted(input: MergeTwoSortsInput): SortOutput {
  const _s = startTime();
  const { first = [], second = [], order = 'asc', key = '' } = input;

  let firstLen = first.length,
    firstPointer = firstLen - 1,
    secondLen = second.length,
    secondPointer = secondLen - 1, // should start where the second array numbers end
    secondArray = (second as any[]).concat(
      key.length && typeof key === 'string'
        ? Array.from({ length: firstLen }, () => ({ [key]: 0 }))
        : Array.from({ length: firstLen }, () => 0)
    ),
    mainPointer = secondArray.length - 1; // start at the end of the secondArray

  const firstArray = first;

  const swapCondition = (a: any, b: any): boolean =>
    isAsc(order) ? a >= b : a <= b;

  while (firstPointer >= 0 && secondPointer >= 0) {
    let condition = key
      ? swapCondition(
          firstArray[firstPointer][key],
          secondArray[secondPointer][key]
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
