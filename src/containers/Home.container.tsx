import React, { SFC } from 'react'
import { Spring } from 'react-spring'

import LoaderHoc, { InjectedProps } from '../components/hoc/LoaderHoc'

import { Container, Checkbox, Segment } from 'semantic-ui-react'
import WeatherContainer from './Weather.container'
import PostsContainer from './Posts.container'

interface IProps extends InjectedProps { }

const from = {
	opacity: 0, transform: 'translate(-50%, -50%)'
}
const to = {
	opacity: 1, transform: 'translate(0,0)'
}

const Home: SFC<IProps> = ( { darkTheme, onClick } ) => {
	return (
		<Container className={darkTheme ? "night-theme" : 'main-container'}>
			<Segment className="toggle-button" compact>
				<Checkbox onChange={onClick} toggle/>
			</Segment>
			<Spring
				from={from} to={to}>
				{styles => <WeatherContainer style={styles} />}
			</Spring>
			<PostsContainer />
		</Container>
	)
}

const theme = {

}
export default LoaderHoc( Home )
