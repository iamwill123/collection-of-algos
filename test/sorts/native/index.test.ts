import nativeSort from '../../../src/lib/sorts/native'
import { cases } from '../test-cases'

describe('Native JS sort', () => {
	test(cases[1], () => {
		const obj = { arr: [5, 3, 1, 4, 2] }
		const { arr: arrOfNums } = nativeSort(obj)
		expect(arrOfNums).toEqual([1, 2, 3, 4, 5])
	})

	test(cases[2], () => {
		const obj = { arr: [5, 3, 1, 4, 2], order: 'desc' }

		const { arr: arrOfNums } = nativeSort(obj)
		expect(arrOfNums).toEqual([5, 4, 3, 2, 1])
	})

	test(cases[3], () => {
		const obj = {
			arr: [
				{ name: 'John', age: 23 },
				{ name: 'Mike', age: 32 },
				{ name: 'Chris', age: 11 },
				{ name: 'Nick', age: 19 },
			],
			key: 'age',
		}
		const { arr: arrOfObjs } = nativeSort(obj)

		expect(arrOfObjs).toEqual([
			{ name: 'Chris', age: 11 },
			{ name: 'Nick', age: 19 },
			{ name: 'John', age: 23 },
			{ name: 'Mike', age: 32 },
		])
	})
	test(cases[4], () => {
		const obj = {
			arr: [
				{ name: 'John', height: 23 },
				{ name: 'Mike', height: 32 },
				{ name: 'Chris', height: 11 },
				{ name: 'Nick', height: 19 },
			],
			key: 'height',
			order: 'desc',
		}
		const { arr: arrOfObjs } = nativeSort(obj)
		expect(arrOfObjs).toEqual([
			{ name: 'Mike', height: 32 },
			{ name: 'John', height: 23 },
			{ name: 'Nick', height: 19 },
			{ name: 'Chris', height: 11 },
		])
	})
})
