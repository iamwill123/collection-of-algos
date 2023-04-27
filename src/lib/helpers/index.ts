import { ArrayInput, SortOrder } from '../../types/sorts'
const startTime = () => Date.now()
const endTime = () => Date.now()
const howLongExecTook = (_: number, __: number) => __ - _
const isAsc = (order: SortOrder = 'asc') => order === 'asc'

const isAnObj = (x: number, arr: ArrayInput): boolean =>
	typeof arr[x] === 'object'
const isNumber = (x: number, arr: ArrayInput): boolean =>
	typeof arr[x] === 'number'

export { startTime, endTime, howLongExecTook, isAsc, isAnObj, isNumber }
