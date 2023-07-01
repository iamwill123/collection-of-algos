import mergeTwoSorts from '../../../src/lib/sorts/mergeTwoSorts';

describe('mergeTwoSorts sort', () => {
  test('cases[0]: given empty first list, it returns an empty list', () => {
    const obj1 = { first: [] };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([]);
  });

  test('cases[1]: given both ASC order sorted first and second list, it returns an ASC ordered merged list', () => {
    const obj = { first: [2, 3, 5], second: [1, 4, 6] };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    expect(arrOfNums).toEqual([1, 2, 3, 4, 5, 6]);

    const obj1 = { first: [2, 3], second: [1, 4, 6, 10, 22] };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([1, 2, 3, 4, 6, 10, 22]);
  });

  test('cases[2]: given both DESC order sorted first and second list, it returns a DESC ordered merged list', () => {
    const obj = { first: [5, 3, 2], second: [6, 4, 1], order: 'desc' };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    expect(arrOfNums).toEqual([6, 5, 4, 3, 2, 1]);

    const obj1 = { first: [5, 3, 2, 1], second: [10, 4, 0], order: 'desc' };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([10, 5, 4, 3, 2, 1, 0]);
  });

  test('cases[3]: given both ASC order sorted first and second list of objects, it returns an ASC ordered merged list of objects (also handles floats, negative nums, alphabet chars)', () => {
    const obj = {
      first: [{ value: 0 }, { value: 3 }, { value: 5 }],
      second: [{ value: 1 }, { value: 4 }, { value: 6 }],
      key: 'value',
    };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    expect(arrOfNums).toEqual([
      { value: 0 },
      { value: 1 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
    ]);

    // handle negative numbers
    const obj1 = {
      first: [{ value: -2 }, { value: -1 }, { value: 5 }],
      second: [{ value: -99 }, { value: -10 }, { value: 6 }],
      key: 'value',
    };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([
      { value: -99 },
      { value: -10 },
      { value: -2 },
      { value: -1 },
      { value: 5 },
      { value: 6 },
    ]);

    // handle floats
    const obj2 = {
      first: [{ value: -2.2 }, { value: -1.1 }, { value: 5.5 }],
      second: [{ value: -99.9 }, { value: -10.1 }, { value: 6.6 }],
      key: 'value',
    };
    const { arr: arrOfNums2 } = mergeTwoSorts(obj2);

    expect(arrOfNums2).toEqual([
      { value: -99.9 },
      { value: -10.1 },
      { value: -2.2 },
      { value: -1.1 },
      { value: 5.5 },
      { value: 6.6 },
    ]);

    // handle alphabet chars
    const obj3 = {
      first: [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
      second: [{ value: 'd' }, { value: 'e' }, { value: 'f' }],
      key: 'value',
    };
    const { arr: arrOfNums3 } = mergeTwoSorts(obj3);
    expect(arrOfNums3).toEqual([
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
      { value: 'd' },
      { value: 'e' },
      { value: 'f' },
    ]);
  });

  test('cases[4]: given both DESC order sorted first and second list of objects, it returns an DESC ordered merged list of objects (also handles floats, negative nums, alphabet chars)', () => {
    const obj = {
      first: [{ value: 5 }, { value: 3 }, { value: 2 }],
      second: [{ value: 6 }, { value: 4 }, { value: 1 }],
      key: 'value',
      order: 'desc',
    };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    expect(arrOfNums).toEqual([
      { value: 6 },
      { value: 5 },
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 1 },
    ]);

    // handle negative numbers
    const obj1 = {
      first: [{ value: 5 }, { value: 3 }, { value: -2 }],
      second: [{ value: 6 }, { value: 1 }, { value: -4 }],
      key: 'value',
      order: 'desc',
    };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([
      { value: 6 },
      { value: 5 },
      { value: 3 },
      { value: 1 },
      { value: -2 },
      { value: -4 },
    ]);

    // handle floats
    const obj2 = {
      first: [{ value: 5.5 }, { value: 3.3 }, { value: -2.2 }],
      second: [{ value: 6.6 }, { value: 1.1 }, { value: -4.4 }],
      key: 'value',
      order: 'desc',
    };
    const { arr: arrOfNums2 } = mergeTwoSorts(obj2);
    expect(arrOfNums2).toEqual([
      { value: 6.6 },
      { value: 5.5 },
      { value: 3.3 },
      { value: 1.1 },
      { value: -2.2 },
      { value: -4.4 },
    ]);

    // handle alphabet chars
    const obj3 = {
      first: [{ value: 'c' }, { value: 'b' }, { value: 'a' }],
      second: [{ value: 'f' }, { value: 'e' }, { value: 'd' }],
      key: 'value',
      order: 'desc',
    };
    const { arr: arrOfNums3 } = mergeTwoSorts(obj3);
    expect(arrOfNums3).toEqual([
      { value: 'f' },
      { value: 'e' },
      { value: 'd' },
      { value: 'c' },
      { value: 'b' },
      { value: 'a' },
    ]);
  });
});
