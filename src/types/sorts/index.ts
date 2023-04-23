type SortOrder = 'asc' | 'desc' | 'ascending' | 'descending' | string
type ArrayOfObjects = {
	[key: string]: number | string
}[]
type SortByKey = string

type ArrayInput = number[] | ArrayOfObjects | any[]

type SortOutput = {
	arr: ArrayInput // the sorted array
	key?: SortByKey // the key to sort by
	order?: SortOrder // the order to sort by
	n?: number // the number of elements in the array
	execTime?: number // the execution time in milliseconds
}
type SortInput = {
	arr: ArrayInput
	order?: SortOrder
	key?: SortByKey
}

export {
	SortOrder,
	ArrayOfObjects,
	SortByKey,
	ArrayInput,
	SortOutput,
	SortInput,
}
