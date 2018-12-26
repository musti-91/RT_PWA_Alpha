import React, { SFC, useState } from 'react';
import { Container, Item } from 'semantic-ui-react';
import { Spring } from 'react-spring';

import DayCard from './DayCard';

interface IProps {
	list?: object[] | any;
}

const from = (i: number) => ({
	opacity: i < 10 ? (i * 50) / 100 : i / 1000
});

const to = (i?: number) => ({
	opacity: 1
});

const WeatherList: SFC<IProps> = ({ list }) => {
	return <Container>{renderList(list)}</Container>;
};

const renderList = (list: object[]) =>
	list.map((item: object | any, i: number) => (
		<Spring key={item.id} from={from(i)} to={to}>
			{styles => <DayCard styles={styles} todayWeather={item} />}
		</Spring>
	));

export default WeatherList;
