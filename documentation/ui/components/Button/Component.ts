import Component from '../Base/Component'
import { Button, IButtonComponent, IButtonProps } from './types'

class ButtonComponent extends Component implements IButtonComponent {
	constructor(props: IButtonProps) {
		super({ elementType: 'button', className: ['button'] })
		this.element.textContent = props.label
		this.element.setAttribute('data-action', props.action)
		this.element.addEventListener('click', props.clickHandler)
	}

	public getElement(): HTMLElement {
		return this.element
	}
}

export default ButtonComponent
