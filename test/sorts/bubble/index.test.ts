import bubble from '../../../src/lib/sorts/bubble'
import { cases } from '../test-cases'
import { testData } from '../test-data'

describe('Bubble sort', () => {
	const { unsorted, sorted } = testData
	test('cases[-1]: given a callback with arguments, execute it ', async () => {
		const obj = {
			arr: [5, 7, 9, 55, 2, 66],
			callback: async (a: number, b: number) => {
				return await Promise.resolve()
			},
		}
		const { arr: arrOfNums, animate } = await bubble(obj)
		expect(arrOfNums).toEqual([2, 5, 7, 9, 55, 66])
		expect(animate).toEqual(true)

		const obj1 = {
			arr: [5, 7, 9, 55, 2, 66],
			callback: async () => {
				return await Promise.resolve()
			},
		}
		const { arr: arrOfNums1, animate: _animate } = await bubble(obj1)
		expect(arrOfNums1).toEqual([2, 5, 7, 9, 55, 66])
		expect(_animate).toEqual(false)
	})

	test('cases[0]: ' + cases[0], async () => {
		const obj = { arr: [5] }
		const { arr: arrOfNums } = await bubble(obj)
		expect(arrOfNums).toEqual([5])

		const obj1 = { arr: [] }
		const { arr: arrOfNums1 } = await bubble(obj1)
		expect(arrOfNums1).toEqual([])
	})

	test('cases[1]: ' + cases[1], async () => {
		const obj = { arr: unsorted().arr.numbers }
		const { arr: arrOfNums } = await bubble(obj)
		expect(arrOfNums).toEqual(sorted().arr.numbers)
	})

	test('cases[2]: ' + cases[2], async () => {
		let order = 'desc'
		const obj = { arr: unsorted().arr.numbers, order }
		const { arr: arrOfNums } = await bubble(obj)

		expect(arrOfNums).toEqual(sorted({ order }).arr.numbers)
	})

	test('cases[3]: ' + cases[3], async () => {
		const obj = {
			arr: unsorted().arr.objects,
			key: 'age',
		}
		const { arr: arrOfObjs } = await bubble(obj)

		expect(arrOfObjs).toEqual(sorted({}).arr.objects)
	})

	test('cases[4]: ' + cases[4], async () => {
		let key = 'height',
			order = 'desc'
		const obj = {
			arr: unsorted({ key }).arr.objects,
			key,
			order,
		}
		const { arr: arrOfObjs } = await bubble(obj)
		expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects)
	})
})
