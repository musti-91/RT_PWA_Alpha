import React, { Component } from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import history from '../utils/history'
import { routes } from './routes'
import LanguageProvider from '../components/hoc/LangugeProvider';


interface IProps {}

class Routing extends Component<IProps> {
	render() {
		return (
			<LanguageProvider locale="be">
				<Router history={history}>
					<Switch>
						{Object.keys(routes).map(route=> <Route {...routes[route]} key={routes[route].sequence} />)}
					</Switch>
				</Router>
			</LanguageProvider>
		)
	}
}
export default Routing
