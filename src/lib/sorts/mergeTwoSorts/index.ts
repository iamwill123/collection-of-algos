import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
} from '../../helpers';
import { MergeTwoSortsInput, SortOutput } from '../../../types/sorts';

function merge_first_sorted_into_second_sorted(
  input: MergeTwoSortsInput
): SortOutput {
  const _s = startTime();
  const { first = [], second = [], order = 'asc', key = '' } = input;

  let firstLen = first.length,
    firstPointer = firstLen - 1,
    secondLen = second.length,
    secondPointer = firstPointer, // start where the numbers end
    mainPointer = secondLen - 1; // start at the end of the second array, we will be swapping from the end

  const firstArray = first;
  // we need to make sure that second is large enough to hold all the objects/numbers
  const secondArray = (second as any[]).concat(
    key.length && typeof key === 'string'
      ? Array.from({ length: firstLen }, () => ({ [key]: 0 }))
      : Array.from({ length: firstLen }, () => 0)
  );

  // condition for asc or desc order
  const swapCondition = (a: any, b: any): boolean =>
    isAsc(order) ? a >= b : a <= b;

  // find the largest of both numbers/objects and add to the ends of second
  while (firstPointer >= 0 && secondPointer >= 0) {
    let condition = key
      ? swapCondition(
          firstArray[firstPointer][key],
          secondArray[secondPointer][key]
        )
      : swapCondition(firstArray[firstPointer], secondArray[secondPointer]);

    if (condition) {
      // swap
      [secondArray[mainPointer]] = [firstArray[firstPointer]];
      firstPointer--, mainPointer--;
    } else {
      // swap
      [secondArray[mainPointer]] = [secondArray[secondPointer]];
      secondPointer--, mainPointer--;
    }
  }

  // gather any points that jumped off
  while (
    firstArray[firstPointer] &&
    (typeof firstArray[firstPointer] === 'object'
      ? firstArray[firstPointer][key] >= 0
      : firstArray[firstPointer] >= 0)
  ) {
    [secondArray[mainPointer]] = [firstArray[firstPointer]];
    firstPointer--, mainPointer--;
  }

  console.log("🚀 ~ file: index.ts:72 ~ secondArray:", secondArray)
  return {
    arr: secondArray.length ? secondArray : firstArray,
    key,
    order,
    n: secondArray.length,
    execTime: howLongExecTook(_s, endTime()),
  };
}

export default merge_first_sorted_into_second_sorted;
