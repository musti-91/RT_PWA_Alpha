import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import { Spring } from 'react-spring';
import SmallCard from './SmallCard';

interface IProps {
	week: any;
	weekdays: string[];
}

class WeekCard extends Component<IProps> {
	render() {
		const { week } = this.props;
		let weekday = this.renderDays(week);
		return (
			<Container>
				<div className="week-card">{week && weekday}</div>
			</Container>
		);
	}

	renderDays = (week: any) => {
		let element: any = '';
		if (week) {
			element = Object.keys(week).map((key: any) => {
				return (
					week[key].length !== 0 && (
						<Spring key={key} from={{ opacity: 0 }} to={{ opacity: 1 }}>
							{styles => (
								<SmallCard day={week[key]} weekday={key} style={styles} />
							)}
						</Spring>
					)
				);
			});
		}
		return element;
	};
}
export default WeekCard;
