/*
	Insertion sort, like selection sort, is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

	O(n^2) worst and avg case
	O(n) best case

	https://en.wikipedia.org/wiki/Insertion_sort

	In this sort, we start at the beginning of the array and assume that the first element is sorted. We then look at the next element, and insert it into the correct position in the sorted array. We accomplish this by shifting all of the elements that are larger than the new element to the right. We repeat this process for every element in the array, inserting it into the correct position in the sorted portion of the array.
*/

import {
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	isDesc,
	startTime,
} from '../../helpers'
import { NumberOrObject, SortInput, SortOutput } from '../../../types/sorts'

function compare(
	a: NumberOrObject,
	b: NumberOrObject,
	key = '',
	order = 'asc'
): number {
	if (key) {
		a = a[key]
		b = b[key]
	}

	if (isAsc(order)) {
		return a < b ? -1 : a > b ? 1 : 0
	} else if (isDesc(order)) {
		return a > b ? -1 : a < b ? 1 : 0
	} else {
		throw new Error(`Invalid order: ${order}.`)
	}
}

function insertion(input: SortInput): SortOutput {
	const _s = startTime()
	const { arr, order = 'asc', key = '' } = input

	const n: number = arr.length

	for (let i = 1; i < n; i++) {
		let currentVal = arr[i]
		// j is the index to the left of the current index
		let j = i - 1
		// if j is greater than or equal to 0 and the order is ascending otherwise descending
		while (j >= 0 && compare(arr[j], currentVal, key, order) > 0) {
			// shift larger numbers to the right
			arr[j + 1] = arr[j]
			// go through entire leftOfStartIndex portion of the sub-arrary
			j--
		}

		// insert to the right of the smallest number
		arr[j + 1] = currentVal
	}

	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)
	return { arr, key, order, n, execTime: execTimeInMs }
}

export default insertion