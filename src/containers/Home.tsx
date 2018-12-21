import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import WeatherContainer from './WeatherContainer';
import PostsContainer from './PostsContainer';

interface IProps {}
class Home extends Component<IProps> {
	render() {
		return (
			<Container>
				<WeatherContainer />
				<PostsContainer />
			</Container>
		);
	}
}
export default Home;
