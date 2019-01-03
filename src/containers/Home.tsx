
import React, { SFC, useEffect } from 'react';
import { Spring } from 'react-spring';

import LoaderHoc from '../components/hoc/LoaderHoc'
import { connect } from 'react-redux'
import { Container, Checkbox, Segment } from 'semantic-ui-react';

import  { push } from 'react-router-redux'

import PostsContainer from './PostsContainer';
import WeatherContainer from './WeatherContainer';
import { RootStateType } from '../types';

interface IProps {
	darkTheme: boolean;
	loading:boolean
}


const from = {
	opacity: 0, transform: 'translate(-50%, -50%)'
}
const to = {
	opacity: 1, transform: 'translate(0,0)'
}

const Home: SFC<IProps> = ( { darkTheme } ) => {

	return (
		<Container className={ darkTheme ? "night-theme" : 'main-container'}>
			<Segment className="toggle-button" compact>
				<Checkbox toggle />
			</Segment>
			<Spring
				from={from} to={to}>
				{styles => <WeatherContainer style={styles}/>}
			</Spring>
			<PostsContainer />
		</Container>
	);
};

export default LoaderHoc(Home)
