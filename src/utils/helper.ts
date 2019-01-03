import moment from 'moment';

export const f2c = ( temp: number ) => {
	return ( ( ( temp - 32 ) * ( 5 / 9 ) ) / 9 ).toFixed( 0 );
};

const icons: any = {
	'01d': require( '../assets/images/weather/01d.png' ),
	'01n': require( '../assets/images/weather/01n.png' ),
	'02d': require( '../assets/images/weather/02d.png' ),
	'02n': require( '../assets/images/weather/02n.png' ),
	'03d': require( '../assets/images/weather/03d.png' ),
	'03n': require( '../assets/images/weather/03d.png' ),
	'04d': require( '../assets/images/weather/03d.png' ),
	'04n': require( '../assets/images/weather/04n.png' ),
	'09d': require( '../assets/images/weather/09d.png' ),
	'09n': require( '../assets/images/weather/09n.png' ),
	'10d': require( '../assets/images/weather/10d.png' ),
	'10n': require( '../assets/images/weather/10n.png' ),
	'11d': require( '../assets/images/weather/11d.png' ),
	'11n': require( '../assets/images/weather/11n.png' ),
	'13d': require( '../assets/images/weather/13d.png' ),
	'13n': require( '../assets/images/weather/13n.png' ),
	'50d': require( '../assets/images/weather/50d.png' ),
	'50n': require( '../assets/images/weather/50n.png' ),
	humidity: require( '../assets/images/weather/humidity.png' ),
	pressure: require( '../assets/images/weather/pressure.png' ),
	wind: require( '../assets/images/weather/wind.png' ),
	c: require( '../assets/images/weather/c.png' ),
	f: require( '../assets/images/weather/f.png' )
};

export let getIcon = ( code: string | any ) => {
	for ( let key in icons ) {
		if ( code === key ) return icons[code];
	}
	return 'alarm';
};
export const formatDate = ( date: string ) =>
	date.substring( 0, date.lastIndexOf( ':' ) );

export let getWeatherOfToday = ( response: object | any ) => {
	let convertedDate;
	let todayWeather: any = [];
	if ( response.list.length !== 0 ) {
		response.list.forEach( ( day: any ) => {
			convertedDate = moment( day.dt_txt ).format( 'ddd' ); // Fri
			let today = moment( new Date() ).format( 'ddd' ); // Fri
			if ( convertedDate === today ) {
				todayWeather.push( day );
			}
		} );
	}
	return filterHours( todayWeather );
};

let filterHours = ( list: any ) => {
	switch ( list.length ) {
		case 1:
			return formatObject( list[0] );
		case 2:
			return formatObject( list[1] );
		case 3:
			return formatObject( list[2] );
		case 4:
			return formatObject( list[3] );
		case 5:
			return formatObject( list[3] );
		case 6:
			return formatObject( list[4] );
		case 7:
			return formatObject( list[5] );
		case 8:
			return formatObject( list[5] );
		default:
			return formatObject( list[0] );
	}
};

let formatObject = ( obj: object | any ) => ( {
	dt_format: moment( obj.dt_txt ).format( 'ddd' ),
	dt_txt: obj.dt_txt,
	temp: {
		c: f2c(obj.main.temp) + '\xB0C',
		c_icon: icons.c,
		f: obj.main.temp,
		f_icon: icons.f + '\xB0F'
	},
	humidity: { deg: obj.main.humidity + '\xB0', icon: icons.humidity },
	pressure: { deg: obj.main.pressure + '\xB0', icon: icons.pressure },
	wind: { deg: obj.wind.speed, icon: icons.wind },
	id: obj.weather[0].id,
	main: obj.weather[0].main,
	description: obj.weather[0].description,
	icon: getIcon( obj.weather[0].icon )
} );

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const formattingWeekDays = ( array: any ) => {
	let tempObject: any = {};
	let tempArray: any = [];
	weekDays.forEach( weekday => ( tempObject[weekday] = [] ) );
	array.forEach( ( el: any ) => {
		switch ( el.dt_format ) {
			case 'Mon':
				tempObject['Mon'].push( el );
				break;
			case 'Tue':
				tempObject['Tue'].push( el );
				break;
			case 'Wed':
				tempObject['Wed'].push( el );
				break;
			case 'Thu':
				tempObject['Thu'].push( el );
				break;
			case 'Fri':
				tempObject['Fri'].push( el );
				break;
			case 'Sat':
				tempObject['Sat'].push( el );
				break;
			case 'Sun':
				tempObject['Sun'].push( el );
				break;
		}
		tempArray.push( tempObject );
	} );
	return tempArray;
};
export let getWeekWeather = ( res: object | any ) => {
	let min_maxDays: object[] = [];
	if ( res && res.list.length !== 0 ) {
		res.list.forEach( ( current: object | any ) => {
			if (
				current.dt_txt.indexOf( '09:00' ) !== -1 ||
				current.dt_txt.indexOf( '21:00' ) !== -1
			) {
				min_maxDays.push( formatObject( current ) );
			}
		} );
	}
	// temp(formattingWeekDays(min_maxDays)[0]);
	return formattingWeekDays( min_maxDays )[0];
};
const temp = ( min_maxDays: object[] | any ) => {
	console.log( min_maxDays );
};

export const showErrorMessage= (error: object, title: string ) => Object.assign({}, error, title)