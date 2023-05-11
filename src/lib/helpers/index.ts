import { ArrayInput, GenerateRandomNumbers, SortOrder } from '../../types/sorts'

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
}
