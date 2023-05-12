interface Button {
	label: string
	action: string
}

interface IButtonContainer {
	element: HTMLElement
}

interface IButtonComponent {
	getElement: () => HTMLElement
}

interface IBarProps {
	value: number
	elementType?: string
	className?: string[]
}

interface IButtonProps {
	label: string
	action: string
	clickHandler: () => void
}
export { IButtonContainer, IButtonComponent, Button, IButtonProps, IBarProps }
