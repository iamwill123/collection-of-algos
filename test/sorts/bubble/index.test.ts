import bubble from '../../../src/lib/sorts/bubble'

describe('bubble sort', () => {
	test('should sort an array of numbers', () => {
		const { arr: arrOfNums } = bubble([5, 3, 1, 4, 2])
		expect(arrOfNums).toEqual([1, 2, 3, 4, 5])
	})

	test('should sort an array of objects', () => {
		const { arr: arrOfObjs } = bubble(
			[
				{ name: 'John', age: 23 },
				{ name: 'Mike', age: 32 },
				{ name: 'Chris', age: 11 },
				{ name: 'Nick', age: 19 },
			],
			'age'
		)
		expect(arrOfObjs).toEqual([
			{ name: 'Chris', age: 11 },
			{ name: 'Nick', age: 19 },
			{ name: 'John', age: 23 },
			{ name: 'Mike', age: 32 },
		])
	})
})
