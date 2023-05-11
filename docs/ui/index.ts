import { findMaxNumber, generateRandomNumbers } from '../../src/lib/helpers'
import bubble from '../../src/lib/sorts/bubble'
import SortVisualizer from './components/SortVisualizer'

// todo allow user input for random numbers
let sortProps = {
	arr: generateRandomNumbers({ n: 15, min: 1, max: 100 }),
}

let props = {
	sortProps,
	sortFn: bubble,
	maxNumber: findMaxNumber(sortProps.arr),
	containerSelector: '[data-component="BubbleSort"]',
}

new SortVisualizer(props)
