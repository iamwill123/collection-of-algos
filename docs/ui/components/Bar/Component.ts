import Component from '../Base/Component'
import { IBarProps } from '../Button/types'
import { IBarComponent } from './types'

class BarComponent extends Component implements IBarComponent {
	element: HTMLDivElement

	constructor(props: IBarProps) {
		let _props = {
			className: props.className || ['bar'],
			elementType: props.elementType || 'div',
		}
		super(_props)
		this.element.style.height = `${props.value * 5}px`
		this.element.innerHTML = `<span class="text">${props.value}</span>`
	}
}

export default BarComponent
