import nativeSort from "../../../src/lib/sorts/native";
import { cases } from "../test-cases";
import { testData } from "../test-data";

describe("Native JS sort", () => {
  const { unsorted, sorted } = testData;
  test("cases[0]: " + cases[0], async () => {
    const obj = { arr: [5] };
    const { arr: arrOfNums } = await nativeSort(obj);
    expect(arrOfNums).toEqual([5]);

    const obj1 = { arr: [] };
    const { arr: arrOfNums1 } = await nativeSort(obj1);
    expect(arrOfNums1).toEqual([]);
  });

  test("cases[1]: " + cases[1], async () => {
    const obj = { arr: unsorted().arr.numbers };
    const { arr: arrOfNums } = await nativeSort(obj);
    expect(arrOfNums).toEqual(sorted().arr.numbers);
  });

  test("cases[2]: " + cases[2], async () => {
    let order = "desc";
    const obj = { arr: unsorted().arr.numbers, order };
    const { arr: arrOfNums } = await nativeSort(obj);

    expect(arrOfNums).toEqual(sorted({ order }).arr.numbers);
  });

  test("cases[3]: " + cases[3], async () => {
    const obj = {
      arr: unsorted().arr.objects,
      key: "age",
    };
    const { arr: arrOfObjs } = await nativeSort(obj);

    expect(arrOfObjs).toEqual(sorted({}).arr.objects);
  });

  test("cases[4]: " + cases[4], async () => {
    let key = "height",
      order = "desc";
    const obj = {
      arr: unsorted({ key }).arr.objects,
      key,
      order,
    };
    const { arr: arrOfObjs } = await nativeSort(obj);
    expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects);
  });

  test("cases[4]: " + cases[4], async () => {
    let key = "height",
      order = "desc";
    const obj = {
      arr: unsorted({ key }).arr.objects,
      key,
      order,
    };
    const { arr: arrOfObjs } = await nativeSort(obj);
    expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects);
  });

  test("cases[8]: " + cases[8], async () => {
    const obj = {
      arr: unsorted().arr.alphaNumericWithFloats,
      isSorting: () => false,
    };
    const { arr: arrOfNums } = await nativeSort(obj);
    expect(arrOfNums).toEqual(sorted().arr.alphaNumericWithFloats);
  });

  test("cases[9]: " + cases[9], async () => {
    let order = "desc";
    const obj = {
      arr: unsorted().arr.alphaNumericWithFloats,
      order,
    };
    const { arr: arrOfNums } = await nativeSort(obj);
    expect(arrOfNums).toEqual(sorted({ order }).arr.alphaNumericWithFloats);
  });
});
