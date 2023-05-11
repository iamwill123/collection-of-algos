import { IButtonComponent, IButtonContainer } from './types'

class ButtonContainerComponent implements IButtonContainer {
	element: HTMLDivElement

	constructor() {
		this.element = document.createElement('div')
		this.element.className = 'button-container'
	}

	addButton(button: IButtonComponent): void {
		this.element.appendChild(button.element)
	}
}

export default ButtonContainerComponent
