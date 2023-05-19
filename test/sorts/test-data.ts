import { isAsc } from '../../src/lib/helpers'

const testData = {
	unsorted: ({ key = 'age' } = {}) => {
		return {
			arr: {
				numbers: [5, 3, -9, 1, 4, 2, -1],
				objects: [
					{ name: 'John', [key]: 23 },
					{ name: 'Mike', [key]: 32 },
					{ name: 'Chris', [key]: -11 },
					{ name: 'Nick', [key]: 19 },
					{ name: 'Ariana', [key]: -9 },
					{ name: 'Will', [key]: 9 },
				],
			},
		}
	},
	sorted: ({ key = 'age', order = 'asc' } = {}) => {
		return {
			arr: {
				numbers: isAsc(order)
					? [-9, -1, 1, 2, 3, 4, 5]
					: [5, 4, 3, 2, 1, -1, -9],
				objects: isAsc(order)
					? [
							{ name: 'Chris', [key]: -11 },
							{ name: 'Ariana', [key]: -9 },
							{ name: 'Will', [key]: 9 },
							{ name: 'Nick', [key]: 19 },
							{ name: 'John', [key]: 23 },
							{ name: 'Mike', [key]: 32 },
					  ]
					: [
							{ name: 'Mike', [key]: 32 },
							{ name: 'John', [key]: 23 },
							{ name: 'Nick', [key]: 19 },
							{ name: 'Will', [key]: 9 },
							{ name: 'Ariana', [key]: -9 },
							{ name: 'Chris', [key]: -11 },
					  ],
			},
		}
	},
}

export { testData }
