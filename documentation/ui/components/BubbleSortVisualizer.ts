import { ArrayInput, SortInput } from '../types'

interface SortVisualizerProps {
	sortProps: SortInput
	maxNumber: number
	containerSelector: string
}

class BubbleSortVisualizer {
	private initialArray: ArrayInput = []
	private currentArray: ArrayInput = []
	private sortProps: SortInput = { arr: [] }
	private container: HTMLElement = null as unknown as HTMLElement
	private barContainer: HTMLElement = null as unknown as HTMLElement
	// private itemContainer: HTMLElement = null as unknown as HTMLElement
	private isSorting: boolean = false
	private colorState: boolean = false
	private maxNumber: number = 0

	private playButton: HTMLElement | null = null
	private pauseButton: HTMLElement | null = null
	private resetButton: HTMLElement | null = null
	private replayButton: HTMLElement | null = null

	constructor(props: SortVisualizerProps) {
		this.initialArray = props.sortProps.arr
		this.currentArray = [...this.initialArray]
		this.sortProps = props.sortProps
		this.maxNumber = props.maxNumber
		this.container = document.querySelector(
			props.containerSelector
		) as HTMLElement

		this.init()
	}

	private init(): void {
		// set min height of container to be a bit higher than the max number
		this.container.style.minHeight = `${this.maxNumber * 5 + 100}px`
		this.renderBars()
		this.createButtons()
		this.render()
	}

	private renderBars(): void {
		this.container.innerHTML = ''
		const barContainer = document.createElement('div')
		barContainer.className = 'bar-container'
		barContainer.style.minHeight = `${this.maxNumber * 5 + 50}px`
		this.barContainer = barContainer

		for (let i = 0; i < this.currentArray.length; i++) {
			const bar = document.createElement('div')
			bar.className = 'bar'
			bar.style.height = `${this.currentArray[i] * 5}px`
			bar.innerHTML = `<span class="text">${this.currentArray[i]}</span>`
			barContainer.appendChild(bar)
		}
		this.container.appendChild(barContainer)
	}

	private createButtons(): void {
		const buttonContainer = document.createElement('div')
		buttonContainer.className = 'button-container'

		const playButton = document.createElement('button')
		playButton.className = 'button'
		playButton.textContent = '⏴'
		playButton.dataset.action = 'play'

		const pauseButton = document.createElement('button')
		pauseButton.className = 'button'
		pauseButton.textContent = '⏸'
		pauseButton.dataset.action = 'pause'

		const resetButton = document.createElement('button')
		resetButton.className = 'button'
		resetButton.textContent = '↺'
		resetButton.dataset.action = 'reset'

		const replayButton = document.createElement('button')
		replayButton.className = 'button'
		replayButton.textContent = '↺⏴'
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
	}

	private handlePlay = (time: number | any = 3000): void => {
		if (!this.isSorting) {
			this.isSorting = true
			// let user set the time
			this.sort()
		}
	}

	private handlePause = (): void => {
		console.log('pause')
		this.isSorting = false
		console.log(
			'🚀 ~ file: BubbleSortVisualizer.ts:110 ~ BubbleSortVisualizer ~ this.isSorting:',
			this.isSorting
		)
	}

	private handleReset = (): void => {
		this.currentArray = [...this.initialArray]
		// re-init
		this.init()
		this.isSorting = false
	}

	private handleReplay = async (time: number | any = 1000): Promise<void> => {
		this.handleReset()
		await new Promise((resolve) => setTimeout(resolve, time))
		this.handlePlay()
	}

	private async sort(): Promise<void> {
		while (!this.isSorted() && this.isSorting) {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			// Update the DOM to reflect the current state of the array after each step of the sorting
			await this.updateDOM()
		}
		this.isSorting = false
	}

	private animateSwap(i: number, j: number): void {
		const bars = this.barContainer.children
		const bar1 = bars[i] as HTMLDivElement
		const bar2 = bars[j] as HTMLDivElement
		// reset colors

		// swap
		const temp = this.currentArray[i]
		this.currentArray[i] = this.currentArray[j]
		this.currentArray[j] = temp

		bar1.style.height = `${this.currentArray[i] * 5}px`
		bar1.style.background = this.colorState ? `royalblue` : `blueviolet`
		bar1.innerHTML = `<span class="text">${this.currentArray[i]}</span>`
		bar2.style.height = `${this.currentArray[j] * 5}px`
		bar2.style.background = this.colorState ? `royalblue` : `blueviolet`
		bar2.innerHTML = `<span class="text">${this.currentArray[j]}</span>`

		this.colorState = !this.colorState // toggle color state
	}

	private async animateBubbleSort(time: number | any = 500): Promise<void> {
		for (let i = 0; i < this.currentArray.length; i++) {
			for (let j = 0; j < this.currentArray.length - i - 1; j++) {
				// pause if isSorting is false
				if (!this.isSorting) return
				const leftNum = j
				const rightNum = j + 1
				let _leftNum = this.currentArray[leftNum]
				let _rightNum = this.currentArray[rightNum]
				if (_leftNum > _rightNum) {
					this.animateSwap(leftNum, rightNum)
					await new Promise((resolve) => setTimeout(resolve, time))
				}
			}
		}
	}

	private async updateDOM(): Promise<void> {
		await this.animateBubbleSort()
	}

	private isSorted(): boolean {
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

export default BubbleSortVisualizer
