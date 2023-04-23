import { SortOrder } from '@/types/sorts'
const startTime = () => Date.now()
const endTime = () => Date.now()
const howLongExecTook = (_: number, __: number) => __ - _
const isAsc = (order: SortOrder = 'asc') => order === 'asc'

export { startTime, endTime, howLongExecTook, isAsc }
