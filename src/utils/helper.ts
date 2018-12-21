import moment from 'moment';

export const f2c = (temp: number) => {
	return (((temp - 32) * (5 / 9)) / 9).toFixed(0);
};

const icons: any = {
	'01d': require('../assets/images/weather/01d.png'),
	'01n': require('../assets/images/weather/01n.png'),
	'02d': require('../assets/images/weather/02d.png'),
	'02n': require('../assets/images/weather/02n.png'),
	'03d': require('../assets/images/weather/03d.png'),
	'03n': require('../assets/images/weather/03d.png'),
	'04d': require('../assets/images/weather/03d.png'),
	'04n': require('../assets/images/weather/04n.png'),
	'09d': require('../assets/images/weather/09d.png'),
	'09n': require('../assets/images/weather/09n.png'),
	'10d': require('../assets/images/weather/10d.png'),
	'10n': require('../assets/images/weather/10n.png'),
	'11d': require('../assets/images/weather/11d.png'),
	'11n': require('../assets/images/weather/11n.png'),
	'13d': require('../assets/images/weather/13d.png'),
	'13n': require('../assets/images/weather/13n.png'),
	'50d': require('../assets/images/weather/50d.png'),
	'50n': require('../assets/images/weather/50n.png'),
	humidity: require('../assets/images/weather/humidity.png'),
	pressure: require('../assets/images/weather/pressure.png'),
	wind: require('../assets/images/weather/wind.png'),
	c: require('../assets/images/weather/c.png'),
	f: require('../assets/images/weather/f.png')
};

export let getIcon = (code: string | any) => {
	for (let key in icons) {
		if (code === key) return icons[code];
	}
	return 'alarm';
};
export const formatDate = (date: string) =>
	date.substring(0, date.lastIndexOf(':'));

export let getWeatherOfToday = (response: object | any) => {
	let convertedDate;
	let todayWeather: any = [];
	response.list.forEach((day: any) => {
		convertedDate = moment(day.dt_txt).format('ddd'); // Fri
		let today = moment(new Date()).format('ddd'); // Fri
		if (convertedDate === today) {
			console.log(day);
			todayWeather.push(day);
		}
	});
	return filterHours(todayWeather);
};

let filterHours = (list: any) => {
	switch (list.length) {
		case 1:
			return formatObject(list[0]);
		case 2:
			return formatObject(list[1]);
		case 3:
			return formatObject(list[2]);
		case 4:
			return formatObject(list[3]);
		case 5:
			return formatObject(list[3]);
		case 6:
			return formatObject(list[4]);
		case 7:
			return formatObject(list[5]);
		case 8:
			return formatObject(list[5]);
		default:
			return formatObject(list[0]);
	}
};

let formatObject = (obj: object | any) => {
	return {
		dt_txt: obj.dt_txt,
		temp: {
			c: f2c(obj.main.temp),
			c_icon: getIcon('c'),
			f: obj.main.temp,
			f_icon: getIcon('f')
		},
		humidity: { deg: obj.main.humidity, icon: getIcon('humidity') },
		pressure: { deg: obj.main.pressure, icon: getIcon('pressure') },
		wind: { deg: obj.wind.speed, icon: getIcon('wind') },
		id: obj.weather[0].id,
		main: obj.weather[0].main,
		description: obj.weather[0].description,
		icon: getIcon(obj.weather[0].icon)
	};
};
export let apiresponse = {
	city: {
		id: 2794118,
		name: 'Kontich',
		coord: {
			lat: 51.1344,
			lon: 4.4456
		},
		country: 'BE',
		population: 20591
	},
	cod: '200',
	message: 0.1667,
	cnt: 40,
	list: [
		{
			dt: 1545426000,
			main: {
				temp: 283.2,
				temp_min: 282.237,
				temp_max: 283.2,
				pressure: 1018.54,
				sea_level: 1021.57,
				grnd_level: 1018.54,
				humidity: 93,
				temp_kf: 0.97
			},
			weather: [
				{
					id: 500,
					main: 'Rain',
					description: 'light rain',
					icon: '10n'
				}
			],
			clouds: {
				all: 80
			},
			wind: {
				speed: 8.26,
				deg: 260
			},
			rain: {
				'3h': 0.029999999999999
			},
			sys: {
				pod: 'n'
			},
			dt_txt: '2018-12-21 21:00:00'
		}
	]
};
