import React, { Component } from 'react'
import { Container, Label } from 'semantic-ui-react'
import { Spring } from 'react-spring'

import { weatherApi, geolocationApi } from '../utils/weatherAPI'
import { getWeatherOfToday, getWeekWeather } from '../utils/helper'
import WeekCard from '../components/WeekCard'
import DayCard from '../components/DayCard'

interface IProps {
	style?: React.CSSProperties
}
interface IState {
	navigator: object | any
	location: string
	position: object | any
	wpId: any
	weatherDataAvailable: boolean
	weatherData: any
	weatherDay: object
}

class WeatherContainer extends Component<IProps, IState> {
	state: IState = {
		navigator: !navigator.onLine, // offline
		location: '',
		wpId: null,
		weatherDataAvailable: false,
		weatherData: null,
		weatherDay: {},
		position: {
			lat: 1,
			lng: 1
		}
	}

	componentDidMount() {
		window.addEventListener('online', this.onOfflineMode)
		window.addEventListener('offline', this.onOfflineMode)
		this.getPositionPermission()
		this.watchPosition()
		const { position } = this.state
		if (position) {
			this.locatePosition(position)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onOfflineMode)
		window.removeEventListener('offline', this.onOfflineMode)
		this.clearPosition()
	}

	render() {
		const {
			navigator,
			weatherDataAvailable,
			weatherData,
			weatherDay
		} = this.state
		return (
			<Container className="weather-container">
				{navigator && this.renderOfflineBadge('offline')}
				{!this.checkGeolocationInNavigator() &&
					this.renderOfflineBadge(`You have no Coordinates 💩`)}
				{weatherDataAvailable && this.renderTodayWeather(weatherData)}
				{weatherDataAvailable && this.renderWeekWeather(weatherData)}
			</Container>
		)
	}

	renderOfflineBadge = (status: string) => (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{props => (
				<span style={props}>
					<Label color="red">{status}</Label>
				</span>
			)}
		</Spring>
	)

	renderTodayWeather(data: object) {
		return <DayCard todayWeather={getWeatherOfToday(data)} />
	}

	renderWeekWeather(data: any) {
		let weekList = getWeekWeather(data)
		const keys = data && Object.keys(weekList)
		let values: any = []
		for (let key in weekList) {
			values.push(weekList[key])
		}
		return <WeekCard week={weekList} weekdays={keys} />
	}

	checkGeolocationInNavigator = () => 'geolocation' in navigator // return true

	getPositionPermission = () => {
		if (!('geolocation' in navigator)) {
			this.renderOfflineBadge('geolocation not found')
			return
		}
		navigator.geolocation.getCurrentPosition(
			(position: object) => this.setPosition(position),
			this.failedFetchLocation
		)
	}

	watchPosition = () => {
		let wpId = navigator.geolocation.watchPosition(newPostion =>
			this.setPosition(newPostion)
		)
		this.setState({ wpId })
	}

	clearPosition = () =>
		this.state.wpId && navigator.geolocation.clearWatch(this.state.wpId)

	locatePosition = (position: any) => {
		geolocationApi
			.get(position)
			.then(res => geolocationApi.getLocationName(res))
			.then(formattedLocationName => weatherApi.get(formattedLocationName))
			.then(weatherInfo => {
				if (weatherInfo) {
					this.setState({
						weatherDataAvailable: true,
						weatherData: weatherInfo
					})
				}
			})
			.catch(error => console.log('[could not get weather info]: ', error))
	}

	onOfflineMode = () => this.setState(() => ({ navigator: !navigator.onLine }))

	setPosition = (position: object | any) => {
		this.setState(() => ({
			position: {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
		}))
		this.locatePosition(this.state.position)
	}
	failedFetchLocation = (error: any) => console.log(error)
}
export default WeatherContainer
