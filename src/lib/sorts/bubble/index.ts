/*
bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

The time complexity of bubble sort is O(n^2) in the worst case and O(n) in the best case.
The space complexity of bubble sort is O(1).

- This function sorts an array of numbers.
- The parameter arr is the array to sort.
- The parameter n is the number of elements in the array.
- The function returns the sorted array.
*/

function bubble(arr: number[] = [], n: number = arr.length): number[] {
  if (n <= 1) return arr;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

export default bubble;