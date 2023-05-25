import count from '../../../src/lib/sorts/count'
import { cases } from '../test-cases'
import { testData } from '../test-data'

describe('count sort', () => {
	const { unsorted, sorted } = testData
	test('cases[0]: ' + cases[0], async () => {
		const obj = { arr: [5] }
		const { arr: arrOfNums } = await count(obj)
		expect(arrOfNums).toEqual([5])

		const obj1 = { arr: [] }
		const { arr: arrOfNums1 } = await count(obj1)
		expect(arrOfNums1).toEqual([])
	})

	test('cases[1]: ' + cases[1], async () => {
		const obj = { arr: unsorted().arr.numbers }
		const { arr: arrOfNums } = await count(obj)
		expect(arrOfNums).toEqual(sorted().arr.numbers)
	})

	test('cases[2]: ' + cases[2], async () => {
		let order = 'desc'
		const obj = { arr: unsorted().arr.numbers, order }
		const { arr: arrOfNums } = await count(obj)
		expect(arrOfNums).toEqual(sorted({ order }).arr.numbers)
	})

	test('cases[3]: ' + cases[3], async () => {
		const obj = {
			arr: unsorted().arr.objects,
			key: 'age',
		}
		const { arr: arrOfObjs } = await count(obj)

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
		const { arr: arrOfObjs } = await count(obj)
		expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects)
	})

	test('cases[5]: ' + cases[5], async () => {
		const obj = {
			arr: unsorted().arr.numbers,
			isSorting: () => false,
		}
		const { arr: arrOfNums } = await count(obj)
		expect(arrOfNums).toEqual(unsorted().arr.numbers)
	})

	test.todo('cases[6]: ' + cases[6])
	// test('cases[6]: ' + cases[6], async () => {
	// 	const obj = {
	// 		arr: unsorted().arr.numbers,
	// 		callback: async (a: number, b: number) => {
	// 			return await Promise.resolve()
	// 		},
	// 	}
	// 	const { arr: arrOfNums, animate } = await count(obj)
	// 	expect(arrOfNums).toEqual(sorted().arr.numbers)
	// 	expect(animate).toEqual(true)
	// })

	test.todo('cases[7]: ' + cases[7])
	// test('cases[7]: ' + cases[7], async () => {
	// 	const obj = {
	// 		arr: unsorted().arr.numbers,
	// 		callback: async () => {
	// 			return await Promise.resolve()
	// 		},
	// 	}
	// 	const { arr: arrOfNums, animate } = await count(obj)
	// 	expect(arrOfNums).toEqual(sorted().arr.numbers)
	// 	expect(animate).toEqual(false)
	// })
})
