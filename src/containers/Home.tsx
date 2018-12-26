import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Container } from 'semantic-ui-react';

import { Link, NavLink } from 'react-router-dom';
import WeatherContainer from './WeatherContainer';
import PostsContainer from './PostsContainer';

interface IProps {}
class Home extends Component<IProps> {
	render() {
		return (
			<Container>
				<WeatherContainer />
				<Spring
					from={{ opacity: 0, transform: 'translateY(-90%)' }}
					to={{ opacity: 1, transform: 'translateY(0)' }}
				>
					{styles => <PostsContainer style={styles} />}
				</Spring>
			</Container>
		);
	}
}
export default Home;
