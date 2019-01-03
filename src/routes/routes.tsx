import * as React from 'react'
import Loadable from 'react-loadable'
import { Container, Header } from 'semantic-ui-react'
import Post from '../containers/Post'

const Loading = () => (
	<Container>
		<Header>Loading....</Header>
	</Container>
)
/** simple use convention */
const Home = Loadable({
	loader: () => import('../containers/Home'),
	loading: Loading
})
const Posts = Loadable({
	loader: () => import('../containers/PostsContainer'),
	loading: Loading
})
const Weather = Loadable({
	loader: () => import('../containers/WeatherContainer'),
	loading: Loading
})
const Users = Loadable({
	loader: () => import('../containers/Users.container'),
	loading: Loading
})

interface IRoute {
	sequence: number
	exact: boolean
	path: string
	component: any
}

// const LoadingComponent = (path:any) => Loadable({
//   loader: () => import(path),
//   loading: Loading,
// })

interface Routes {
	[propName: string]: IRoute
}

const routes: Routes = {
	home: {
		sequence: 1,
		component: Home,
		path: '/',
		exact: true
	},
	posts: {
		sequence: 2,
		component: Posts,
		path: '/posts',
		exact: true
	},
	weather: {
		sequence: 3,
		component: Weather,
		path: '/weather',
		exact: true
	},
	post: {
		sequence: 4,
		component: Post,
		path: '/post',
		exact: true
	},
	users: {
		sequence: 5,
		component: Users,
		path: '/users',
		exact: true
	}
}

export default routes
