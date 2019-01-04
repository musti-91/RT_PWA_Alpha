
import Loadable from 'react-loadable'
import Home from './Home.container'
import WeatherContainer from './Weather.container'
import PostsContainer from './Posts.container'

import Loading from '../components/hoc/PreLoadHoc'

const PostLoadable = Loadable({
  loader: () => import("./Post.container"),
  loading: Loading
})

interface RouteDefinition {
	sequence:number
	exact: boolean
	path: string
	component: any
}
interface IRoute {
	[propName: string]: RouteDefinition
}
export const routes: IRoute = {
	home: {
		sequence: 1,
		path: '/',
		exact: true,
		component: Home
  },
  posts: {
		sequence: 2,
		path: '/posts',
		exact: true,
		component: PostsContainer
  },
  weather: {
		sequence: 4,
		path: '/weather',
		exact: true,
		component: WeatherContainer
  },
  post: {
		sequence: 5,
		path: '/:post',
		exact: true,
		component: PostLoadable
	}
}