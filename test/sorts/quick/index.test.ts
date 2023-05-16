import quick from '../../../src/lib/sorts/quick'
import { cases } from '../test-cases'
import { testData } from '../test-data'

describe('quick sort', () => {
	const { unsorted, sorted } = testData
	test('cases[0]: ' + cases[0], async () => {
		const obj = { arr: [5] }
		const { arr: arrOfNums } = await quick(obj)
		expect(arrOfNums).toEqual([5])

		const obj1 = { arr: [] }
		const { arr: arrOfNums1 } = await quick(obj1)
		expect(arrOfNums1).toEqual([])
	})

	test('cases[1]: ' + cases[1], async () => {
		const obj = { arr: unsorted().arr.numbers }
		const { arr: arrOfNums } = await quick(obj)
		expect(arrOfNums).toEqual(sorted().arr.numbers)
	})

	test('cases[2]: ' + cases[2], async () => {
		let order = 'desc'
		const obj = { arr: unsorted().arr.numbers, order }
		const { arr: arrOfNums } = await quick(obj)
		expect(arrOfNums).toEqual(sorted({ order }).arr.numbers)
	})

	test('cases[3]: ' + cases[3], async () => {
		const obj = {
			arr: unsorted().arr.objects,
			key: 'age',
		}
		const { arr: arrOfObjs } = await quick(obj)

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
		const { arr: arrOfObjs } = await quick(obj)
		expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects)
	})

	test('cases[5]: ' + cases[5], async () => {
		const obj = {
			arr: unsorted().arr.numbers,
			isSorting: () => false,
		}
		const { arr: arrOfNums } = await quick(obj)
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
	// 	const { arr: arrOfNums, animate } = await quick(obj)
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
	// 	const { arr: arrOfNums, animate } = await quick(obj)
	// 	expect(arrOfNums).toEqual(sorted().arr.numbers)
	// 	expect(animate).toEqual(false)
	// })
	test('cases[8]: should sort correctly when switching partition type to "hoare"', async () => {
		const partitionType = 'hoare'
		const obj = {
			arr: unsorted().arr.numbers,
		}
		const { arr: arrOfNums } = await quick(obj, partitionType)
		expect(arrOfNums).toEqual(sorted().arr.numbers)

		let key = 'height',
			order = 'desc'
		const obj1 = {
			arr: unsorted({ key }).arr.objects,
			key,
			order,
		}
		const { arr: arrOfObjs } = await quick(obj1, partitionType)
		expect(arrOfObjs).toEqual(sorted({ key, order }).arr.objects)
	})
})
