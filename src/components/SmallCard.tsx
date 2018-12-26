import React, { SFC } from 'react';
import { Image } from 'semantic-ui-react';

interface IProps {
	day: object | any;
	weekday: string;
	style?: any;
}

const SmallCard: SFC<IProps> = ({ day, weekday }) => {
	return (
		<div className="day">
			<h3>{weekday}</h3>
			<div>
				<Image src={day[0].icon} className="week_icon" />
			</div>
			<h4>{day[0].main}</h4>
			<p>{day[0].description}</p>
			<div className="small_card_detail">
				<span>{day[0].temp.c}</span>
			</div>
		</div>
	);
};

export default SmallCard;
