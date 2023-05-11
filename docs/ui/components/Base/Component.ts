//  The base Component class to handle common functionality, such as element creation and applying classes.
interface IComponent {
	getElement: () => HTMLElement
}

class Component implements IComponent {
	protected element: HTMLElement

	constructor(props: { elementType: string; className?: string[] }) {
		this.element = document.createElement(props.elementType)
		if (props.className) {
			this.element.className = props.className.join(' ')
		}
	}

	public getElement(): HTMLElement {
		return this.element
	}
}

export default Component
