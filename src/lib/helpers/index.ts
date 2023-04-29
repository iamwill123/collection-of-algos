import { ArrayInput, SortOrder } from '../../types/sorts'
const startTime = () => Date.now()
const endTime = () => Date.now()
const howLongExecTook = (_: number, __: number) => __ - _
const isAsc = (order: SortOrder = 'asc') => order === 'asc'
const isDesc = (order: SortOrder = 'desc') => order === 'desc'

const isAnObj = (idx: number, arr: ArrayInput): boolean =>
	typeof arr[idx] === 'object' && arr[idx] !== null
const isNumber = (idx: number, arr: ArrayInput): boolean =>
	typeof arr[idx] === 'number'

export { startTime, endTime, howLongExecTook, isAsc, isDesc, isAnObj, isNumber }
