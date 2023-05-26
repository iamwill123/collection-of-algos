import {
  startTime,
  endTime,
  howLongExecTook,
  isAsc,
  isDesc,
  isAnObj,
  isNumber,
  generateRandomNumbers,
  generateRandomLetters,
  findMaxNumber,
  sleep,
  pickRandomIndex,
  compare,
  shuffleArray,
  generateRandomFloats,
} from '../../src/lib/helpers';

describe('Helper functions', () => {
  test('isAsc', () => {
    expect(isAsc('asc')).toBe(true);
    expect(isAsc('desc')).toBe(false);
  });

  test('isDesc', () => {
    expect(isDesc('asc')).toBe(false);
    expect(isDesc('desc')).toBe(true);
  });

  test('isAnObj', () => {
    expect(isAnObj(0, [{}])).toBe(true);
    expect(isAnObj(0, [123])).toBe(false);
  });

  test('isNumber', () => {
    expect(isNumber(0, [123])).toBe(true);
    expect(isNumber(0, [{}])).toBe(false);
  });

  test('findMaxNumber', () => {
    expect(findMaxNumber([1, 2, 3, 4, 5])).toBe(5);
    expect(findMaxNumber([-1, -2, -3, -4, -5])).toBe(-1);
  });

  test('generateRandomNumbers', () => {
    const arr = generateRandomNumbers({ n: 5, min: 1, max: 10 });
    expect(arr.length).toBe(5);
    arr.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    });
  });

  test('generateRandomLetters', () => {
    const arr = generateRandomLetters({ n: 5 });
    expect(arr.length).toBe(5);
    arr.forEach((letter) => {
      expect(letter).toMatch(/^[a-z]$/);
    });
  });

  test('shuffleArray', () => {
    let randomFloats = generateRandomFloats({ n: 5, min: 1, max: 100 });
    let randomNumbers = generateRandomNumbers({ n: 5, min: 1, max: 100 });
    let randomLetters: any = generateRandomLetters({ n: 5 });
    let mixedArray = randomNumbers.concat(randomLetters).concat(randomFloats);
    let shuffledArray = shuffleArray(mixedArray);

    expect(shuffledArray.length).toBe(15);

    shuffledArray.forEach((item) => {
      if (typeof item === 'number') {
        expect(item).toBeGreaterThanOrEqual(1);
        expect(item).toBeLessThanOrEqual(100);
      } else {
        expect(item).toMatch(/^[a-z]$/);
      }
    });
  });

  test('sleep + howLongExecTook combo', async () => {
    const _s = startTime();
    await sleep(1000);
    const _e = endTime();
    expect(howLongExecTook(_s, _e)).toBeGreaterThanOrEqual(1000);
  });

  test('pickRandomIndex (not really a good test)', () => {
    const arr = [1, 2, 3, 4, 5];
    const idx = pickRandomIndex(0, arr.length - 1);
    expect(arr.includes(arr[idx])).toBe(true);
  });

  describe('compare', () => {
    test('should compare numbers in ascending order', () => {
      expect(compare(1, 2)).toBe(-1);
      expect(compare(2, 1)).toBe(1);
      expect(compare(1, 1)).toBe(0);
    });

    test('should compare numbers in descending order', () => {
      expect(compare(1, 2, '', 'desc')).toBe(1);
      expect(compare(2, 1, '', 'desc')).toBe(-1);
      expect(compare(1, 1, '', 'desc')).toBe(0);
    });

    test('should compare strings in ascending order', () => {
      expect(compare('apple', 'banana')).toBe(-1);
      expect(compare('banana', 'apple')).toBe(1);
      expect(compare('apple', 'apple')).toBe(0);
    });

    test('should compare strings in descending order', () => {
      expect(compare('apple', 'banana', '', 'desc')).toBe(1);
      expect(compare('banana', 'apple', '', 'desc')).toBe(-1);
      expect(compare('apple', 'apple', '', 'desc')).toBe(0);
    });

    test('should prioritize numbers over strings in ascending order', () => {
      expect(compare(1, 'apple')).toBe(-1);
      expect(compare('apple', 1)).toBe(1);
    });

    test('should prioritize numbers over strings in descending order', () => {
      expect(compare(1, 'apple', '', 'desc')).toBe(-1);
      expect(compare('apple', 1, '', 'desc')).toBe(1);
    });
  });
});
