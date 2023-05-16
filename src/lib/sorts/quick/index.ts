/*
quick sort is a divide and conquer algorithm that recursively divides a list into a smaller list and a larger list based on a pivot element. It then sorts the smaller list and the larger list by recursively calling itself. This process continues until the entire list is sorted. Here we are using the Lomuto partition scheme.
*/

import {
	compare,
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	isDesc,
	pickRandomIndex,
	startTime,
} from '../../helpers'
import { ArrayInput, SortInput, SortOutput } from '../../../types/sorts'

async function quick_sort(input: SortInput): Promise<SortOutput> {
	const _s = startTime()
	const {
		arr,
		order = 'asc',
		key = '',
		callback = () => {},
		isSorting = () => true,
	} = input

	const n: number = arr.length
	let startIdx: number = 0
	let endIdx: number = n - 1

	let animate: boolean = false

	// base case
	if (n <= 0 || !isSorting()) {
		return { arr, key, order, n, execTime: 0, animate: false }
	}

	if (isAnObj(0, arr) && !key) throw new Error('key is required')

	// recursive case
	helper(arr, startIdx, endIdx, order, key, callback, animate)

	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)

	return {
		arr,
		key,
		order,
		n,
		execTime: execTimeInMs,
		animate,
	}
}

function helper(
	arr: ArrayInput,
	startIdx: number,
	endIdx: number,
	order: string,
	key: string,
	callback: Function,
	animate: boolean
) {
	// the leaf workers either 1 or 0
	if (startIdx >= endIdx) return

	let pivotIdx = pickRandomIndex(startIdx, endIdx)
	let pivotElem = arr[pivotIdx]
	// make the pivot value the start of the array
	;[arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]]

	// lomuto's partitioning
	let smaller = startIdx,
		bigger = startIdx

	for (let i = bigger + 1; i <= endIdx; i++) {
		// compare the next number at "bigger" to the pivot elem at startIdx
		if (compare(arr[i], pivotElem, key, order) < 0) {
			smaller++
			;[arr[smaller], arr[i]] = [arr[i], arr[smaller]]
		}
	}
	// put the pivot element to where the smaller index left off after the loop
	;[arr[startIdx], arr[smaller]] = [arr[smaller], arr[startIdx]]
	// new pivotIndex for the next subarrays

	// recursive case
	helper(arr, startIdx, smaller - 1, order, key, callback, animate)
	helper(arr, smaller + 1, endIdx, order, key, callback, animate)
}

export default quick_sort
