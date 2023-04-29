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

function selection(input: SortInput): SortOutput {
	const _s = startTime()
	const { arr, order = 'asc', key = '' } = input
	const n: number = arr.length

	if (n <= 1) {
		return { arr, key, order, n, execTime: 0 }
	}

	for (let k = 0; k < n - 1; k++) {
		// initialize min to k, the first element
		let min = k
		for (let i = k + 1; i < n; i++) {
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

		;[arr[k], arr[min]] = [arr[min], arr[k]]
	}
	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)
	return { arr, key, order, n, execTime: execTimeInMs }
}

export default selection
