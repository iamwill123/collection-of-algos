/*
Radix sort is a non-comparative sorting algorithm with linear time complexity. It avoids comparison by creating and distributing elements into buckets according to their radix. The radix of a number refers to the base of a number system. For decimal system numbers, the radix is 10, and for binary numbers, the radix is 2.
*/

import {
  endTime,
  howLongExecTook,
  isAnObj,
  isAsc,
  startTime,
} from "../../helpers";
import { ArrayInput, SortInput, SortOutput } from "../../../types/sorts";

async function radix(input: SortInput): Promise<SortOutput> {
  const _s = startTime();
  const {
    arr,
    order = "asc",
    key = "",
    callback = () => {},
    isSorting = () => true,
  } = input;
  const n: number = arr.length;
  let animate: boolean = false;

  if (n <= 1 || !isSorting()) {
    return { arr, key, order, n, execTime: 0, animate };
  }

  if (isAnObj(0, arr) && !key) throw new Error("key is required");

  let maxLen = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let value = key ? arr[i][key] : arr[i];
    maxLen = Math.max(maxLen, value);
  }

  maxLen = maxLen.toString().length;
  for (let k = 0; k < maxLen; k++) {
    let tempArr: ArrayInput = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let value = key ? arr[i][key] : arr[i];
      let lastNum = Math.floor(value / Math.pow(10, k)) % 10;
      tempArr[lastNum].push(arr[i]);
    }
    let finalArr: ArrayInput = [];
    if (order === "asc") {
      for (let i = 0; i < 10; i++) {
        finalArr = [...arr, ...tempArr[i]];
      }
    } else {
      for (let i = 9; i >= 0; i--) {
        finalArr = [...arr, ...tempArr[i]];
      }
    }
  }

  let sortedArr = arr;
  const _e = endTime();
  const execTimeInMs = howLongExecTook(_s, _e);
  return { arr: sortedArr, key, order, n, execTime: execTimeInMs, animate };
}

export default radix;
