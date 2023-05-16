import {
	ArrayInput,
	GenerateRandomNumbers,
	NumberOrObject,
	SortOrder,
} from '../../types/sorts'

const startTime = () => Date.now()
const endTime = () => Date.now()
const howLongExecTook = (_: number, __: number) => __ - _
const isAsc = (order: SortOrder = 'asc') => order === 'asc'
const isDesc = (order: SortOrder = 'desc') => order === 'desc'

const isAnObj = (idx: number, arr: ArrayInput): boolean =>
	typeof arr[idx] === 'object' && arr[idx] !== null
const isNumber = (idx: number, arr: ArrayInput): boolean =>
	typeof arr[idx] === 'number'

// O(n) time complexity, O(1) space complexity
const findMaxNumber = (arr: ArrayInput): number => Math.max(...arr)
// O(1) time complexity, O(n) space complexity
// usage const randomNumbers = generateRandomNumbers(5, 1, 10);

const generateRandomNumbers = ({
	n = 0,
	min = 0,
	max = 0,
}: GenerateRandomNumbers = {}): number[] =>
	Array.from({ length: n }, () =>
		Math.floor(Math.random() * (max - min + 1) + min)
	)

const sleep = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

const pickRandomIndex = (start: number, end: number) =>
	Math.floor(Math.random() * (end - start + 1) + start)

// compare is a helper function that compares two numbers or two objects by a key and order (asc or desc) and returns a number (-1, 0, or 1) based on the comparison.
const compare = (
	a: NumberOrObject,
	b: NumberOrObject,
	key: string = '',
	order: string = 'asc'
): number => {
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

export {
	startTime,
	endTime,
	howLongExecTook,
	isAsc,
	isDesc,
	isAnObj,
	isNumber,
	generateRandomNumbers,
	findMaxNumber,
	sleep,
	pickRandomIndex,
	compare,
}
