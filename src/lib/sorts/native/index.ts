import {
	endTime,
	howLongExecTook,
	isAnObj,
	isAsc,
	isNumber,
	startTime,
} from '../../helpers'
import {
	ArrayOutput,
	NumberOrObject,
	SortInput,
	SortOutput,
} from '../../../types/sorts'

async function native(input: SortInput): Promise<SortOutput> {
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

	// Please note that this doesn't make the sort() function asynchronous or non-blocking. It just allows you to use await when calling native(), but the sort() function will still block the event loop while it's running. If your arrays are very large and sorting takes a significant amount of time, this might not be a good approach as it can still lead to your application becoming unresponsive.
	const sorted: ArrayOutput = await new Promise((resolve) => {
		resolve(arr.sort(cb))
	})

	const _e = endTime()
	const execTimeInMs = howLongExecTook(_s, _e)

	return { arr: sorted, key, order, n, execTime: execTimeInMs }
}

export default native
