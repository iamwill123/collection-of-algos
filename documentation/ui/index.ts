import SortAnimation from './components/SortAnimation'
import bubbleSort from '../../src/lib/sorts/bubble'
import { generateRandomNumbers } from '../../src/lib/helpers'

let sortProps = {
	arr: generateRandomNumbers({ n: 5, min: 1, max: 100 }),
}

let animationProps = {
	sortFunction: bubbleSort,
	sortProps: sortProps,
	containerSelector: '[data-component="BubbleSort"]',
}
const bubbleSortAnim = new SortAnimation(animationProps)
