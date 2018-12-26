import React, { SFC } from 'react';
import { Container, Image } from 'semantic-ui-react';

interface IProps {
	todayWeather: object | any;
	styles?: object | any;
}

const DayCard: SFC<IProps> = ({ todayWeather, styles }) => {
	return (
		<Container style={styles} className="list">
			<div className="today_">
				<Image src={todayWeather.icon} className="icon" />
				<div className="today_temp">
					<h2>{todayWeather.temp.c}</h2>
					<h2>{todayWeather.main}</h2>
				</div>
				<div className="labels">
					<div>
						<Image src={todayWeather.humidity.icon} className="small_icon" />
						<p>{todayWeather.humidity.deg}</p>
					</div>
					<div>
						<Image src={todayWeather.pressure.icon} className="small_icon" />
						<p>{todayWeather.pressure.deg}</p>
					</div>
					<div>
						<Image src={todayWeather.wind.icon} className="small_icon" />
						<p>{todayWeather.wind.deg}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default DayCard;
