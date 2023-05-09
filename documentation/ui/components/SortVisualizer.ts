import { sleep } from '../../../src/lib/helpers'
import {
	ArrayInput,
	SortInput,
	SortOutput,
} from '../../../src/types/sorts/index'
import BarComponent from './Bar/Component'
import { IBarComponent } from './Bar/types'
import ButtonComponent from './Button/Component'

interface SortVisualizerProps {
	sortProps: SortInput
	maxNumber: number
	containerSelector: string
	sortFn: (input: SortInput) => Promise<SortOutput>
}

class SortVisualizer {
	private initialArray: ArrayInput = []
	private currentArray: ArrayInput = []
	private sortProps: SortInput = { arr: [] }

	private container: HTMLElement = null as unknown as HTMLElement
	private barContainer: HTMLElement = null as unknown as HTMLElement
	private execTimeElem: HTMLElement = null as unknown as HTMLElement

	private isSorting: boolean = false
	private colorState: boolean = false
	private maxNumber: number = 0
	private arrLength: number = 0
	private execTime: number = 0

	private sortFn: (input: SortInput) => Promise<SortOutput>

	private bars: IBarComponent | [] = []
	private buttons = [
		{ label: '▶', action: 'play' },
		{ label: '⏸', action: 'pause' },
		{ label: '↺', action: 'reset' },
		{ label: '↺ ▶', action: 'replay' },
	]

	private buttonContainer: HTMLElement = null as unknown as HTMLElement

	private playButton: HTMLElement | null = null
	private pauseButton: HTMLElement | null = null
	private resetButton: HTMLElement | null = null
	private replayButton: HTMLElement | null = null

	constructor(props: SortVisualizerProps) {
		this.initialArray = props.sortProps.arr
		this.currentArray = [...this.initialArray]
		this.sortProps = props.sortProps
		this.maxNumber = props.maxNumber
		this.arrLength = this.currentArray.length
		this.container = document.querySelector(
			props.containerSelector
		) as HTMLElement
		this.buttonContainer = document.createElement('div')
		this.buttonContainer.className = 'button-container'
		this.sortFn = props.sortFn
		this.init()
	}

	private init = (): void => {
		// set min height of container to be a bit higher than the max number
		this.container.style.minHeight = `${this.maxNumber * 5 + 100}px`
		this.renderBars()
		this.createButtons()
		this.attachListeners()
	}

	private renderBars = (): void => {
		const barContainer = document.createElement('div')
		barContainer.className = 'bar-container'
		barContainer.style.minHeight = `${this.maxNumber * 5 + 50}px`

		this.currentArray.forEach((value, i) => {
			const bar: any = new BarComponent({ value })
			this.bars[i] = bar.element // Update the this.bars array with new instances
			barContainer.appendChild(this.bars[i])
		})

		if (this.barContainer) {
			this.container.replaceChild(barContainer, this.barContainer)
		} else {
			this.container.appendChild(barContainer)
		}
		this.barContainer = barContainer
	}

	private createButtons = (): void => {
		this.buttons.forEach((button) => {
			const buttonElement = new ButtonComponent({
				label: button.label,
				action: button.action,
				clickHandler: () => {
					// remove active class from all buttons
					this.buttons.forEach((b) => {
						const el = document.querySelector(`[data-action="${b.action}"]`)
						if (el) {
							el.classList.remove('button--active')
						}
					})

					// add active class to clicked button
					buttonElement.getElement().classList.add('button--active')

					// call the corresponding handler
					switch (button.action) {
						case 'play':
							this.handlePlay()
							break
						case 'pause':
							this.handlePause()
							break
						case 'reset':
							this.handleReset()
							break
						case 'replay':
							this.handleReplay()
							break
					}
				},
			})

			this.buttonContainer.appendChild(buttonElement.getElement())
		})
		const execTimeElem = document.createElement('div')
		execTimeElem.className = 'exec-time'
		execTimeElem.innerHTML = `Execution time: ${this.execTime}ms`
		this.execTimeElem = execTimeElem

		this.buttonContainer.appendChild(execTimeElem)
		this.container.appendChild(this.buttonContainer)
	}

	private handlePlay = (time: number | any = 3000): void => {
		if (!this.isSorting) {
			this.isSorting = true
			// let user set the time
			this.sort()
		}
	}

	private handlePause = async (): Promise<void> => {
		await sleep(100)
		this.isSorting = false
	}

	private handleReset = async (): Promise<void> => {
		this.isSorting = false
		await sleep(500)
		this.currentArray = [...this.initialArray]
		this.renderBars()
		// reattach listeners
		this.attachListeners()
	}

	private handleReplay = async (time: number | any = 1000): Promise<void> => {
		this.handleReset()
		await sleep(time)
		this.handlePlay()
	}

	private sort = async (duration = 1000): Promise<void> => {
		while (!this.isSorted() && this.isSorting) {
			await new Promise((resolve) => setTimeout(resolve, duration))
			// Update the DOM to reflect the current state of the array after each step of the sorting
			await this.updateDOM()
		}
		this.isSorting = false
	}

	private animateSwap = async (
		i: number,
		j: number,
		time: number | any = 400
	): Promise<void> => {
		if (!this.barContainer) {
			console.error('barContainer is not initialized')
			return
		}

		const bars = this.barContainer.children
		const bar1 = bars[i] as HTMLDivElement
		const bar2 = bars[j] as HTMLDivElement

		const originalColor1 = bar1.style.background
		const originalColor2 = bar2.style.background
		const barWidth = bar1.offsetWidth
		const xDifference = (j - i) * barWidth

		// Add transition properties for smooth animations
		bar1.style.transition = `transform ${time}ms ease, opacity ${time}ms ease, background ${time}ms ease`
		bar2.style.transition = `transform ${time}ms ease, opacity ${time}ms ease, background ${time}ms ease`

		// Change opacity and background color during swap
		bar1.style.opacity = '0.8'
		bar2.style.opacity = '0.8'
		bar1.style.background = 'red'
		bar2.style.background = 'royalblue'

		// Move bars to their new positions
		bar1.style.transform = `translateX(${xDifference}px)`
		bar2.style.transform = `translateX(${-xDifference}px)`

		await sleep(time)

		// Reset the transform property after the animation
		bar1.style.transform = 'translateX(0)'
		bar2.style.transform = 'translateX(0)'

		// Restore the original opacity and background colors
		bar1.style.opacity = '1'
		bar2.style.opacity = '1'
		bar1.style.background = originalColor1
		bar2.style.background = originalColor2

		// Remove the transition properties after the animation
		bar1.style.transition = ''
		bar2.style.transition = ''

		// Update the DOM elements
		this.barContainer.insertBefore(bar2, bar1)
		this.barContainer.insertBefore(bar1, bars[j])
	}

	private updateDOM = async (): Promise<void> => {
		const input = {
			arr: this.currentArray,
			callback: async (i: number, j: number) => {
				await this.animateSwap(i, j)
			},
			isSorting: () => this.isSorting,
		}
		const { arr, execTime = 0 } = await this.sortFn(input)
		this.execTimeElem.innerHTML = `Animation time: ${execTime / 1000}s`
		// in seconds
		this.currentArray = arr
	}

	private isSorted = (): boolean => {
		for (let i = 1; i < this.arrLength; i++) {
			if (this.currentArray[i] < this.currentArray[i - 1]) {
				return false
			}
		}
		return true
	}

	private addListeners = (): void => {
		this.playButton?.addEventListener('click', this.handlePlay)
		this.pauseButton?.addEventListener('click', this.handlePause)
		this.resetButton?.addEventListener('click', this.handleReset)
		this.replayButton?.addEventListener('click', this.handleReplay)
	}

	private removeListeners = (): void => {
		this.playButton?.addEventListener('click', this.handlePlay)
		this.pauseButton?.addEventListener('click', this.handlePause)
		this.resetButton?.addEventListener('click', this.handleReset)
		this.replayButton?.addEventListener('click', this.handleReplay)
	}

	private attachListeners = (): void => {
		console.log('attachListeners')
		this.removeListeners()
		// stuff going here
		this.addListeners()
	}
}

export default SortVisualizer
