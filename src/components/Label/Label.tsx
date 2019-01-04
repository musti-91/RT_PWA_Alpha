import React, { SFC, ReactNode } from 'react'
import { Icon } from 'semantic-ui-react'
// import { css } from 'react-emotion'
interface IProps {
	title: string
	error?: string
	icon?: any
	children?: ReactNode
}


const Label: SFC<IProps> = ({ title, error, icon, children }) => {
	if (error) {
		return (
			<div style={errorStyle}>
				<span>{title}</span>
				<span>{error}</span>
				<span>{icon}</span>
				{children}
			</div>
		)
	}

	return (
		<div className="label">
			<span>{title}</span>
			<span>{icon && <Icon name={icon} />}</span>
		</div>
	)
}

const errorStyle = { color: 'red' }

export default Label
