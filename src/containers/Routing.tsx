import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from '../utils/history';

import Home from './Home';
import WeatherContainer from './WeatherContainer';
import PostsContainer from './PostsContainer';
import Post from './Post';


interface IProps {}
class Routing extends Component<IProps> {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact component={Home} path="/" />
					<Route component={WeatherContainer} path="/weather" />
					<Route component={PostsContainer} path="/posts" />
					<Route component={Post} path="/:post" />
				</Switch>
			</Router>
		);
	}
}
export default Routing;
