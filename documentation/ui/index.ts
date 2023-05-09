import { findMaxNumber, generateRandomNumbers } from '../../src/lib/helpers'
import bubble from '../../src/lib/sorts/bubble'
import SortVisualizer from './components/SortVisualizer'

let sortProps = {
	arr: generateRandomNumbers({ n: 10, min: 1, max: 100 }),
}

let props = {
	sortProps,
	sortFn: bubble,
	maxNumber: findMaxNumber(sortProps.arr),
	containerSelector: '[data-component="BubbleSort"]',
}
const bubbleSortAnim = new SortVisualizer(props)
