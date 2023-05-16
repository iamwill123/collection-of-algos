import {
	startTime,
	endTime,
	howLongExecTook,
	isAsc,
	isDesc,
	isAnObj,
	isNumber,
	generateRandomNumbers,
	findMaxNumber,
	sleep,
	pickRandomIndex,
	compare,
} from '../../src/lib/helpers'

describe('Helper functions', () => {
	test('isAsc', () => {
		expect(isAsc('asc')).toBe(true)
		expect(isAsc('desc')).toBe(false)
	})

	test('isDesc', () => {
		expect(isDesc('asc')).toBe(false)
		expect(isDesc('desc')).toBe(true)
	})

	test('isAnObj', () => {
		expect(isAnObj(0, [{}])).toBe(true)
		expect(isAnObj(0, [123])).toBe(false)
	})

	test('isNumber', () => {
		expect(isNumber(0, [123])).toBe(true)
		expect(isNumber(0, [{}])).toBe(false)
	})

	test('findMaxNumber', () => {
		expect(findMaxNumber([1, 2, 3, 4, 5])).toBe(5)
		expect(findMaxNumber([-1, -2, -3, -4, -5])).toBe(-1)
	})

	test('generateRandomNumbers', () => {
		const arr = generateRandomNumbers({ n: 5, min: 1, max: 10 })
		expect(arr.length).toBe(5)
		arr.forEach((num) => {
			expect(num).toBeGreaterThanOrEqual(1)
			expect(num).toBeLessThanOrEqual(10)
		})
	})

	test('compare', () => {
		expect(compare(1, 2, '', 'asc')).toBe(-1)
		expect(compare(2, 1, '', 'asc')).toBe(1)
		expect(compare(1, 1, '', 'asc')).toBe(0)
		expect(compare(1, 2, '', 'desc')).toBe(1)
		expect(compare(2, 1, '', 'desc')).toBe(-1)
		expect(compare(1, 1, '', 'desc')).toBe(0)
		expect(() => compare(1, 2, '', 'invalid')).toThrowError(
			'Invalid order: invalid.'
		)
	})
	test('sleep + howLongExecTook combo', async () => {
		const _s = startTime()
		await sleep(1000)
		const _e = endTime()
		expect(howLongExecTook(_s, _e)).toBeGreaterThanOrEqual(1000)
	})

	test('pickRandomIndex (not really a good test)', () => {
		const arr = [1, 2, 3, 4, 5]
		const idx = pickRandomIndex(0, arr.length - 1)
		expect(arr.includes(arr[idx])).toBe(true)
	})
})
