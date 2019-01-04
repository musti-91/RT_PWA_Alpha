import React, { Component } from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import history from '../utils/history'
import { routes } from './routes'


interface IProps {}

class Routing extends Component<IProps> {
	render() {
		return (
			<Router history={history}>
				<Switch>
					{Object.keys(routes).map(route=> <Route {...routes[route]} key={routes[route].sequence} />)}
				</Switch>
			</Router>
		)
	}
}
export default Routing
