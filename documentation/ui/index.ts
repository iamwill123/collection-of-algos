import { findMaxNumber, generateRandomNumbers } from '../../src/lib/helpers'
import BubbleSortVisualizer from './components/BubbleSortVisualizer'

let sortProps = {
	arr: generateRandomNumbers({ n: 10, min: 1, max: 100 }),
}

let props = {
	sortProps,
	maxNumber: findMaxNumber(sortProps.arr),
	containerSelector: '[data-component="BubbleSort"]',
}
const bubbleSortAnim = new BubbleSortVisualizer(props)
