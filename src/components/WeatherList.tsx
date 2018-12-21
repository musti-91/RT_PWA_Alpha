import React, { SFC, useState } from 'react';
import { Container, Item } from 'semantic-ui-react';
import { Spring } from 'react-spring';

import DayCard from './DayCard';

interface IProps {
	list?: object[] | any;
}

const from = {
	opacity: 0
};
const to = {
	opacity: 1
};

const WeatherList: SFC<IProps> = ({ list }) => {
	return <Container>{renderList(list)}</Container>;
};

const renderList = (list: object[]) =>
	list.map((item: object | any) => (
		<Spring key={item.id} from={from} to={to}>
			{styles => <DayCard styles={styles} todayWeather={item} />}
		</Spring>
	));

export default WeatherList;
