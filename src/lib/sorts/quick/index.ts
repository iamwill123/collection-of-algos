/*
quick sort is a divide and conquer algorithm that recursively divides a list into a smaller list and a larger list based on a pivot element. It then sorts the smaller list and the larger list by recursively calling itself. This process continues until the entire list is sorted. Here we are using the Lomuto partition scheme.
*/

import {
	compare,
	endTime,
	howLongExecTook,
	isAnObj,
	pickRandomIndex,
	startTime,
} from '../../helpers'
import { ArrayInput, SortInput, SortOutput } from '../../../types/sorts'

type HelperInput = {
	arr: ArrayInput
	startIdx: number
	endIdx: number
	partitionType: string
	order: string
	key: string
	callback: Function
	animate: boolean
}

async function quick_sort(
	input: SortInput,
	partitionType: string = 'lomuto'
): Promise<SortOutput> {
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
	helper({
		arr,
		startIdx,
		endIdx,
		partitionType,
		order,
		key,
		callback,
		animate,
	})

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

function helper(helperInput: HelperInput) {
	const {
		arr,
		startIdx,
		endIdx,
		partitionType,
		order,
		key,
		callback,
		animate,
	} = helperInput

	// the leaf workers either 1 or 0
	if (startIdx >= endIdx) return

	let pivotIdx = pickRandomIndex(startIdx, endIdx)
	let pivotElem = arr[pivotIdx]
	// make the pivot value the start of the array
	;[arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]]

	let smaller = 0,
		bigger = 0

	if (partitionType === 'hoare') {
		// hoare's partitioning
		smaller = startIdx + 1
		bigger = endIdx

		while (smaller <= bigger) {
			// compare the next number at "smaller" to the pivot elem at startIdx
			if (compare(arr[smaller], pivotElem, key, order) <= 0) {
				smaller++
			} else if (compare(arr[bigger], pivotElem, key, order) > 0) {
				bigger--
			} else {
				;[arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]]
				smaller++
				bigger--
			}
		}

		// put the pivot element to where the smaller index left off after the loop
		;[arr[startIdx], arr[bigger]] = [arr[bigger], arr[startIdx]]

		// recursive case
		helper({ ...helperInput, endIdx: bigger }) // include the pivot in the first half
		helper({ ...helperInput, startIdx: bigger + 1 }) // start from the next element of the pivot
	}

	if (partitionType === 'lomuto') {
		// lomuto's partitioning
		smaller = startIdx
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

		// recursive case
		helper({ ...helperInput, endIdx: smaller - 1 })
		helper({ ...helperInput, startIdx: smaller + 1 })
	}
}

export default quick_sort
