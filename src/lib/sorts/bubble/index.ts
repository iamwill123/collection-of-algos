import { SortInput, SortOutput } from '../../../types/sorts'
/*
bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

The time complexity of bubble sort is O(n^2) in the worst case and O(n) in the best case.
The space complexity of bubble sort is O(1).

- This function sorts an array of numbers.
- The parameter arr is the array to sort.
- The parameter n is the number of elements in the array.
- The function returns the sorted array.
*/

import {
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	startTime,
} from '../../helpers'

async function bubble(input: SortInput): Promise<SortOutput> {
	const _s = startTime()
	const {
		arr,
		order = 'asc',
		key = '',
		callback = () => {},
		isSorting = () => true,
	} = input
	const n: number = arr.length
	let animate: boolean = false

	if (n <= 1) {
		return { arr, key, order, n, execTime: 0 }
	}

	if (isAnObj(0, arr) && !key) throw new Error('key is required')
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (!isSorting()) {
				// Check if sorting is paused
				return { arr, key, order, n, execTime: 0, animate: false }
			}

			const leftNum = isAsc(order) ? j : j + 1
			const rightNum = isAsc(order) ? j + 1 : j
			let _leftNum = isAnObj(leftNum, arr) ? arr[leftNum][key] : arr[leftNum]
			let _rightNum = isAnObj(rightNum, arr)
				? arr[rightNum][key]
				: arr[rightNum]

			if (_leftNum > _rightNum) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // swap

				// if callback contains a function with arguments then execute it
				if (callback.length && isSorting()) {
					animate = true
					await callback(leftNum, rightNum) // animate swap
				}
			}
		}
	}
	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)
	return { arr, key, order, n, execTime: execTimeInMs, animate }
}

export default bubble
