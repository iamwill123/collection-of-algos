import {
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	isNumber,
	startTime,
} from '@/helpers'
import {
	ArrayOutput,
	NumberOrObject,
	SortInput,
	SortOutput,
} from '@/types/sorts'

function native(input: SortInput): SortOutput {
	const _s = startTime()
	const { arr, order = 'asc', key = '' } = input
	const n: number = arr.length
	if (n <= 1) {
		return { arr, key, order, n, execTime: 0 }
	}

	if (isAnObj(0, arr) && !key) throw new Error('key is required')

	const cb = (a: NumberOrObject, b: NumberOrObject): number => {
		let result = null
		if (isNumber(a, arr)) {
			result = isAsc(order) ? a - b : b - a
		} else {
			result = isAsc(order) ? a[key] - b[key] : b[key] - a[key]
		}
		return result
	}
	// Using JS native sort
	const sorted: ArrayOutput = arr.sort(cb)
	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)

	return { arr: sorted, key, order, n, execTime: execTimeInMs }
}

export default native
