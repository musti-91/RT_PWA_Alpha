import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Icon } from 'semantic-ui-react';

interface IProps {
	items: string[];
	icon?: any;
	iconColor?: any;
	onTodoDeleteClicked:(id: number) => void;
}

const fromOpt = {
	opacity: 0,
	color: 'black',
	transform: 'scale(0.50)'
};
const toOpt = {
	opacity: 1,
	color: 'black',
	transform: 'scale(1.2)'
};

class Todos extends Component<IProps> {
	render() {
		const { items, icon, iconColor, onTodoDeleteClicked } = this.props;
		return items.map((item, i) => (
			<Spring from={fromOpt} to={toOpt} key={i}>
				{props => (
					<li key={i} className="list" style={props}>
						{item}
						{icon && (
							<span onClick={() => onTodoDeleteClicked(i)}>
								{icon && <Icon name={icon} color={iconColor} />}
							</span>
						)}
					</li>
				)}
			</Spring>
		));
	}
}

export default Todos;
