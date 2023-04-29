import { isAsc } from '../../src/lib/helpers'

const testData = {
	unsorted: ({ key = 'age' } = {}) => {
		return {
			arr: {
				numbers: [5, 3, 1, 4, 2],
				objects: [
					{ name: 'John', [key]: 23 },
					{ name: 'Mike', [key]: 32 },
					{ name: 'Chris', [key]: 11 },
					{ name: 'Nick', [key]: 19 },
				],
			},
		}
	},
	sorted: ({ key = 'age', order = 'asc' } = {}) => {
		return {
			arr: {
				numbers: isAsc(order) ? [1, 2, 3, 4, 5] : [5, 4, 3, 2, 1],
				objects: isAsc(order)
					? [
							{ name: 'Chris', [key]: 11 },
							{ name: 'Nick', [key]: 19 },
							{ name: 'John', [key]: 23 },
							{ name: 'Mike', [key]: 32 },
					  ]
					: [
							{ name: 'Mike', [key]: 32 },
							{ name: 'John', [key]: 23 },
							{ name: 'Nick', [key]: 19 },
							{ name: 'Chris', [key]: 11 },
					  ],
			},
		}
	},
}

export { testData }
