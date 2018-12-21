import React, { Component } from 'react';
import { Container, Label } from 'semantic-ui-react';
import { Spring } from 'react-spring';
import { weatherApi, geolocationApi } from '../utils/weatherAPI';
import WeatherList from '../components/WeatherList';
import DayCard from '../components/DayCard';
import { getWeatherOfToday, apiresponse } from '../utils/helper';
interface IProps {}
interface IState {
	navigator: object | any;
	location: string;
	position: object | any;
	wpId: any;
	weatherDataAvailable: boolean;
	weatherData: any;
	weatherDay: object;
}

class WeatherContainer extends Component<IProps, IState> {
	state: IState = {
		navigator: !navigator.onLine,
		location: '',
		wpId: null,
		weatherDataAvailable: true,
		weatherData: null,
		weatherDay: {},
		position: {
			lat: 0,
			lng: 0
		}
	};

	componentDidMount() {
		window.addEventListener('online', this.onOfflineMode);
		window.addEventListener('offline', this.onOfflineMode);
		// this.getPositionPermission();
		// this.watchPosition();
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onOfflineMode);
		window.removeEventListener('offline', this.onOfflineMode);
		this.clearPosition();
	}

	render() {
		const { navigator, weatherDataAvailable } = this.state;
		return (
			<Container className="weather_container">
				{!navigator && this.renderOfflineBadge('offline')}
				{!this.checkGeolocationInNavigator() &&
					this.renderOfflineBadge(`You're hiding in this planet`)}
				{weatherDataAvailable && this.renderWeatherInfo()}
			</Container>
		);
	}

	renderOfflineBadge = (status: string) => (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{props => (
				<span style={props}>
					<Label color="red">{status}</Label>
				</span>
			)}
		</Spring>
	);

	renderWeatherInfo() {
		return <DayCard todayWeather={getWeatherOfToday(apiresponse)} />;
	}

	checkGeolocationInNavigator = () => 'geolocation' in navigator; // return true

	getPositionPermission = () => {
		if (!('geolocation' in navigator)) {
			this.renderOfflineBadge('geolocation not found');
			return;
		}
		navigator.geolocation.getCurrentPosition(
			(position: object) => this.setPosition(position),
			this.failedFetchLocation
		);
	};

	watchPosition = () => {
		let wpId = navigator.geolocation.watchPosition(newPostion =>
			this.setPosition(newPostion)
		);
		this.setState({ wpId });
	};

	clearPosition = () =>
		this.state.wpId && navigator.geolocation.clearWatch(this.state.wpId);

	locatePosition = (position: any) => {
		geolocationApi
			.get(position)
			.then(res => geolocationApi.getLocationName(res))
			.then(formattedLocationName => weatherApi.get(formattedLocationName))
			.then(weatherInfo => {
				if (weatherInfo) {
					this.setState({
						weatherDataAvailable: false,
						weatherData: weatherInfo
					});
				}
			})
			.catch(error => console.log('[could not get weather info]: ', error));
	};

	onOfflineMode = () => this.setState(() => ({ navigator: !navigator.onLine }));

	setPosition = (position: object | any) => {
		this.setState(() => ({
			position: {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
		}));
		this.locatePosition(this.state.position);
		console.log(this.state.weatherDataAvailable);
	};
	failedFetchLocation = (error: any) => console.log(error);
}
export default WeatherContainer;
