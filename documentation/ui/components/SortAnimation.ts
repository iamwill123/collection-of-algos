import { ArrayInput, SortInput, SortOutput } from '../types'

type SortFunction = (input: SortInput) => SortOutput

interface SortAnimationProps {
	sortFunction: SortFunction
	sortProps: SortInput
	containerSelector: string
}

class SortAnimation {
	private initialArray: ArrayInput = []
	private currentArray: ArrayInput = []
	private sortProps: SortInput = { arr: [] }
	private container: HTMLElement = null as unknown as HTMLElement
	private itemContainer: HTMLElement = null as unknown as HTMLElement
	private sortFunction: SortFunction = null as unknown as SortFunction
	private isSorting: boolean = false
	private playButton: HTMLElement | null = null
	private pauseButton: HTMLElement | null = null
	private resetButton: HTMLElement | null = null
	private replayButton: HTMLElement | null = null

	constructor(props: SortAnimationProps) {
		this.initialArray = props.sortProps.arr
		this.currentArray = [...this.initialArray]
		this.sortProps = props.sortProps
		this.container = document.querySelector(
			props.containerSelector
		) as HTMLElement
		this.sortFunction = props.sortFunction

		this.init()
	}

	private async init(): Promise<void> {
		await this.createUI()
		await this.createButtons()
		this.render()
	}

	private async createUI(): Promise<void> {
		// Create the array elements and append them to the container
		const itemContainer = document.createElement('div')
		itemContainer.className = 'item-container'

		for (let i = 0; i < this.currentArray.length; i++) {
			const item = document.createElement('div')
			item.className = 'item'
			item.style.left = `${i * 50}px` // set the initial position of the element
			item.textContent = String(this.currentArray[i])
			itemContainer.appendChild(item)
		}
		this.itemContainer = itemContainer
		this.container.appendChild(itemContainer)

		return await Promise.resolve()
	}

	private async createButtons(): Promise<void> {
		const buttonContainer = document.createElement('div')
		buttonContainer.className = 'button-container'

		const playButton = document.createElement('button')
		playButton.className = 'button'
		playButton.textContent = 'Play'
		playButton.dataset.action = 'play'

		const pauseButton = document.createElement('button')
		pauseButton.className = 'button'
		pauseButton.textContent = 'Pause'
		pauseButton.dataset.action = 'pause'

		const resetButton = document.createElement('button')
		resetButton.className = 'button'
		resetButton.textContent = 'Reset'
		resetButton.dataset.action = 'reset'

		const replayButton = document.createElement('button')
		replayButton.className = 'button'
		replayButton.textContent = 'Replay'
		replayButton.dataset.action = 'replay'

		buttonContainer.appendChild(playButton)
		buttonContainer.appendChild(pauseButton)
		buttonContainer.appendChild(resetButton)
		buttonContainer.appendChild(replayButton)
		this.container.appendChild(buttonContainer)

		// Add button click handlers
		this.playButton = document.querySelector('[data-action="play"]')
		this.pauseButton = document.querySelector('[data-action="pause"]')
		this.resetButton = document.querySelector('[data-action="reset"]')
		this.replayButton = document.querySelector('[data-action="replay"]')

		return await Promise.resolve()
	}

	private handlePlay = (): void => {
		console.log('play')
		if (!this.isSorting) {
			this.isSorting = true
			this.sort()
		}
	}

	private handlePause = (): void => {
		console.log('pause')
		this.isSorting = false
	}

	private handleReset = (): void => {
		console.log('reset')
		this.currentArray = [...this.initialArray]
		this.updateDOM(this.currentArray)
		this.isSorting = false
	}

	private handleReplay = (): void => {
		console.log('replay')
		this.handleReset()
		this.handlePlay()
	}

	private async sort(): Promise<void> {
		console.log('sort')
		const { arr } = this.sortFunction(this.sortProps)
		this.currentArray = arr

		// Update the DOM to reflect the current state of the array after each step of the sorting
		await this.updateDOM(this.currentArray)

		// If the array is not yet sorted and the sorting process has not been paused, continue sorting
		if (!this.isSorted() && this.isSorting) {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			await this.sort()
		} else {
			this.isSorting = false
		}
	}

	private async updateDOM(arr: ArrayInput): Promise<void> {
		console.log('updateDOM')
		const itemPositions = new Map<number, number>()
		for (let i = 0; i < arr.length; i++) {
			const item = this.itemContainer.children[i] as HTMLElement | any
			itemPositions.set(parseInt(item.dataset.index), i)
		}

		for (let i = 0; i < arr.length; i++) {
			const item = this.itemContainer.children[i] as HTMLElement | any
			const initialPosition = parseInt(item.dataset.index)
			const newPosition = itemPositions.get(initialPosition)! * 50
			const movement = newPosition - parseInt(item.style.left)
			item.style.transform = `translateX(${movement}px)`
		}

		await new Promise((resolve) => setTimeout(resolve, 1000))
		this.currentArray = arr
		for (let i = 0; i < arr.length; i++) {
			const item = this.itemContainer.children[i] as HTMLElement
			item.style.left = `${itemPositions.get(i)! * 50}px`
			item.dataset.index = String(i)
		}
	}

	private isSorted(): boolean {
		console.log('isSorted')
		for (let i = 1; i < this.currentArray.length; i++) {
			if (this.currentArray[i] < this.currentArray[i - 1]) {
				return false
			}
		}
		return true
	}

	private addListeners(): void {
		this.playButton?.addEventListener('click', this.handlePlay)
		this.pauseButton?.addEventListener('click', this.handlePause)
		this.resetButton?.addEventListener('click', this.handleReset)
		this.replayButton?.addEventListener('click', this.handleReplay)
	}
	private removeListeners(): void {
		this.playButton?.addEventListener('click', this.handlePlay)
		this.pauseButton?.addEventListener('click', this.handlePause)
		this.resetButton?.addEventListener('click', this.handleReset)
		this.replayButton?.addEventListener('click', this.handleReplay)
	}
	render(): void {
		this.removeListeners()
		// stuff going here
		this.addListeners()
	}
}

export default SortAnimation
