import React, { SFC, ReactNode } from 'react';

interface IProps {
	title: string;
	error?: string;
	icon?: string;
	children?: ReactNode;
}

const errorStyle = {
	color: 'red;'
};

const Label: SFC<IProps> = ({ title, error, icon, children }) => {
	if (error) {
		return (
			<div>
				<span style={errorStyle}>{title}</span>
				<span style={errorStyle}>{error}</span>
				<span style={errorStyle}>{icon}</span>
			</div>
		);
	}

	return (
		<div className="label">
			<span>{title}</span>
			<span>{icon && <i className={icon}>{icon}</i>}</span>
		</div>
	);
};

export default Label;
