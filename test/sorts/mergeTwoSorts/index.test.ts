import mergeTwoSorts from '../../../src/lib/sorts/mergeTwoSorts';
import { cases } from '../test-cases';
import { testData } from '../test-data';

describe('mergeTwoSorts sort', () => {
  const { unsorted, sorted } = testData;

  test('cases[0]: given empty first array, it returns an empty []', () => {
    const obj1 = { first: [] };
    const { arr: arrOfNums1 } = mergeTwoSorts(obj1);
    expect(arrOfNums1).toEqual([]);
  });

  test('cases[1]: given a ASC sorted first and second array, it returns an ASC ordered merged list', () => {
    const obj = { first: [2, 3, 5], second: [1, 4, 6] };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    console.log('arrOfNums', arrOfNums);
    expect(arrOfNums).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('cases[2]: given a DESC sorted first and seconds array, it returns an DESC ordered merged list', () => {
    const obj = { first: [5, 3, 2], second: [6, 4, 1], order: 'desc' };
    const { arr: arrOfNums } = mergeTwoSorts(obj);
    console.log('arrOfNums', arrOfNums);
    expect(arrOfNums).toEqual([6, 5, 4, 3, 2, 1]);
  });

  // test('cases[1]: ' + cases[1], () => {
  //   const obj = { arr: unsorted().arr.numbers };
  //   const { arr: arrOfNums } = mergeTwoSorts(obj);
  //   expect(arrOfNums).toEqual(sorted().arr.numbers);
  // });

  // test('cases[2]: ' + cases[2], () => {
  //   let order = 'desc';
  //   const obj = { arr: unsorted().arr.numbers, order };
  //   const { arr: arrOfNums } = mergeTwoSorts(obj);
  //   expect(arrOfNums).toEqual(sorted({ order }).arr.numbers);
  // });

  // test('cases[3]: ' + cases[3], () => {
  //   const obj = {
  //     arr: unsorted().arr.objects,
  //     key: 'age',
  //   };
  //   const { arr: arrOfObjs } = mergeTwoSorts(obj);

  //   expect(arrOfObjs).toEqual(sorted({}).arr.objects);
  // });

  // test('cases[4]: ' + cases[4], () => {
  //   let key = 'height',
  //     order = 'desc';
  //   const obj = {
  //     arr: unsorted({ key }).arr.objects,
  //     key,
  //     order,
  //   };
  //   const { arr: arrOfObjs } = mergeTwoSorts(obj);
  //   expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects);
  // });

  // test('cases[5]: ' + cases[5], () => {
  //   const obj = {
  //     arr: unsorted().arr.numbers,
  //     isSorting: () => false,
  //   };
  //   const { arr: arrOfNums } = mergeTwoSorts(obj);
  //   expect(arrOfNums).toEqual(unsorted().arr.numbers);
  // });
});
