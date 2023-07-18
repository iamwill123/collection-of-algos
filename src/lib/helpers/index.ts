import {
  ArrayInput,
  GenerateRandomNumbers,
  GenerateRandomLetters,
  NumberOrObject,
  SortOrder,
  ArrayOutput,
  GenerateRandomFloats,
} from '../../types/sorts';

const startTime = () => Date.now();
const endTime = () => Date.now();
const howLongExecTook = (_: number, __: number) => __ - _;
const isAsc = (order: SortOrder = 'asc') => order === 'asc';
const isDesc = (order: SortOrder = 'desc') => order === 'desc';

const isAnObj = (idx: number, arr: ArrayInput): boolean =>
  typeof arr[idx] === 'object' && arr[idx] !== null;
const isNumber = (idx: number, arr: ArrayInput): boolean =>
  typeof arr[idx] === 'number';

// O(n) time complexity, O(1) space complexity
const findMaxNumber = (arr: ArrayInput): number => Math.max(...arr);
// O(1) time complexity, O(n) space complexity
// usage const randomNumbers = generateRandomNumbers(5, 1, 10);

const generateRandomNumbers = ({
  n = 0,
  min = 0,
  max = 0,
}: GenerateRandomNumbers = {}): number[] =>
  Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1) + min),
  );

const generateRandomLetters = ({
  n = 0,
  letters = 'abcdefghijklmnopqrstuvwxyz',
}: GenerateRandomLetters = {}): string[] => {
  return Array.from({ length: n }, () =>
    letters.charAt(Math.floor(Math.random() * letters.length)),
  );
};

const generateRandomFloats = ({
  n = 0,
  min = 0,
  max = 0,
}: GenerateRandomFloats = {}): number[] =>
  Array.from({ length: n }, () => Math.random() * (max - min) + min);

// The Fisher-Yates shuffle algorithm
const shuffleArray = (arr: ArrayInput): ArrayOutput => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // swapping shorthand
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const pickRandomIndex = (start: number, end: number) =>
  Math.floor(Math.random() * (end - start + 1) + start);

// compare is a helper function that compares two numbers or two objects by a key and order (asc or desc) and returns a number (-1, 0, or 1) based on the comparison.
const compare = (
  a: NumberOrObject,
  b: NumberOrObject,
  key: string = '',
  order: string = 'asc',
): number => {
  if (key) {
    a = a[key];
    b = b[key];
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return order === 'asc' ? a - b : b - a;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  } else if (typeof a === 'number') {
    return -1; // numbers always come before letters
  } else {
    return 1; // letters always come after numbers
  }
};

export {
  startTime,
  endTime,
  howLongExecTook,
  isAsc,
  isDesc,
  isAnObj,
  isNumber,
  generateRandomNumbers,
  generateRandomLetters,
  generateRandomFloats,
  shuffleArray,
  findMaxNumber,
  sleep,
  pickRandomIndex,
  compare,
};
