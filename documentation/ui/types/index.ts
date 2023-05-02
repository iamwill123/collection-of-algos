type SortOrder = 'asc' | 'desc' | 'ascending' | 'descending' | string
type ArrayOfObjects = {
	[key: string | number]: number | string
}[]
type Object = {
	[key: string | number]: number | string
}
type SortByKey = string

type ArrayInput = number[] | string[] | ArrayOfObjects | any[]
type ArrayOutput = number[] | string[] | ArrayOfObjects | any[]
type NumberOrObject = number | string | Object | any
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

type GenerateRandomNumbers =
	| {
			n?: number
			min?: number
			max?: number
	  }
	| undefined

export {
	SortOrder,
	ArrayOfObjects,
	SortByKey,
	ArrayInput,
	ArrayOutput,
	SortOutput,
	SortInput,
	NumberOrObject,
	GenerateRandomNumbers,
}
