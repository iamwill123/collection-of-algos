import bubble from '../../../src/lib/sorts/bubble'

describe('bubble sort', () => {
	test('should sort an array of numbers in ascending order (by default) provided an object with a arr key with [] of values', () => {
		const obj = { arr: [5, 3, 1, 4, 2] }
		const { arr: arrOfNums } = bubble(obj)
		expect(arrOfNums).toEqual([1, 2, 3, 4, 5])
	})

	test('should sort an array of numbers in descending order when provided a value of "desc" to the order prop', () => {
		const obj = { arr: [5, 3, 1, 4, 2], order: 'desc' }

		const { arr: arrOfNums } = bubble(obj)
		expect(arrOfNums).toEqual([5, 4, 3, 2, 1])
	})

	test('should sort an array of objects in ascending order (by default) when provided an arr key with an [] of {}s, and a key prop', () => {
		const obj = {
			arr: [
				{ name: 'John', age: 23 },
				{ name: 'Mike', age: 32 },
				{ name: 'Chris', age: 11 },
				{ name: 'Nick', age: 19 },
			],
			key: 'age',
		}
		const { arr: arrOfObjs } = bubble(obj)

		expect(arrOfObjs).toEqual([
			{ name: 'Chris', age: 11 },
			{ name: 'Nick', age: 19 },
			{ name: 'John', age: 23 },
			{ name: 'Mike', age: 32 },
		])
	})
	test('should sort an array of objects in descending order when provided an arr key with an [] of {}s, a key prop, and value of "desc" to the order prop', () => {
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
		const { arr: arrOfObjs } = bubble(obj)
		expect(arrOfObjs).toEqual([
			{ name: 'Mike', height: 32 },
			{ name: 'John', height: 23 },
			{ name: 'Nick', height: 19 },
			{ name: 'Chris', height: 11 },
		])
	})
})
