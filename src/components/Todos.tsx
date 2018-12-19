import React, { Component } from 'react';
import { Spring } from 'react-spring';

interface IProps {
	items: string[];
}

const fromOpt = {
	opacity: 0,
	color: 'black',
	transform: 'scale(0.50)'
};
const toOpt = {
	opacity: 1,
	color: 'red',
	transform: 'scale(1)'
};

class Todos extends Component<IProps> {
	render() {
		const { items } = this.props;
		return items.map((item, i) => (
			<Spring from={fromOpt} to={toOpt} key={i}>
				{props => (
					<li key={i} className="list" style={props}>
						{item}
					</li>
				)}
			</Spring>
		));
	}
}

export default Todos;
