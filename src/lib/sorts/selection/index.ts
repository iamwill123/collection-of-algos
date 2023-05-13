/*
Selection sort, find the smallest element in the array, then swap with the first element
*/

import {
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	startTime,
} from '../../helpers'
import { SortInput, SortOutput } from '../../../types/sorts'

async function selection(input: SortInput): Promise<SortOutput> {
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
	for (let k = 0; k < n - 1; k++) {
		// initialize min to k, the first element
		let min = k
		for (let i = k + 1; i < n; i++) {
			if (!isSorting()) {
				// Check if sorting is paused
				return { arr, key, order, n, execTime: 0, animate: false }
			}
			// find where the smallest element is and grab it's index
			const leftNum = isAsc(order) ? i : min
			const rightNum = isAsc(order) ? min : i
			let _leftNum = isAnObj(leftNum, arr) ? arr[leftNum][key] : arr[leftNum]
			let _rightNum = isAnObj(rightNum, arr)
				? arr[rightNum][key]
				: arr[rightNum]

			if (_leftNum < _rightNum) {
				min = i
			}
		}
		if (k !== min) {
			// Only call the callback if we're actually going to swap elements
			if (callback.length && isSorting()) {
				animate = true
				await callback(k, min) // animate swap
			}
			;[arr[k], arr[min]] = [arr[min], arr[k]]
		}
	}
	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)
	return { arr, key, order, n, execTime: execTimeInMs, animate }
}

export default selection
