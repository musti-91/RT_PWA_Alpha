import React, { Component } from 'react';
import { Container, Label, Icon } from 'semantic-ui-react';
import { Spring } from 'react-spring';

import Header from '../components/label/Header';
import Posts from '../components/posts/Posts';
import InputField from '../components/forms/InputField';

interface IProps {
	appName: any;
	author?: any;
}

interface IState {
	title: string;
	[x: string]: any;
	description: string | any;
	offline: boolean;
	posts: object[];
}

class App extends Component<IProps, IState> {
	state: IState = {
		posts: [],
		title: '',
		description: '',
		offline: !navigator.onLine
	};

	componentDidMount() {
		window.addEventListener('online', this.onOfflineMode);
		window.addEventListener('offline', this.onOfflineMode);
		this.fetchPosts().then(res => this.addPostToState(res));
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onOfflineMode);
		window.removeEventListener('offline', this.onOfflineMode);
	}

	fetchPosts = async () => {
		/**
		 * { "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body":""
		 */
		const res = await fetch('http://localhost:3000/posts');
		const results = await res.json();
		return results;
	};

	addPostToState = (posts: object[]) =>
		this.setState(() => ({ posts: [...posts] }));

	onHeaderTitleClicked = (e: any) => {
		window.location.reload();
	};

	onOfflineMode = () => this.setState(() => ({ offline: !navigator.onLine }));

	render() {
		const { appName } = this.props;
		const { offline, posts } = this.state;
		return (
			<Container className="app_theme">
				{offline && this.renderOfflineBadge()}
				<Header
					title={appName}
					onClick={this.onHeaderTitleClicked}
					icon="react"
				/>
				<InputField
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					hasButton
					name="title"
				/>
				<InputField
					onChange={this.onChange}
					onSubmit={this.onSubmit}
					hasButton={false}
					name="description"
				/>
				{posts.length !== 0 && this.renderPosts(posts)}
			</Container>
		);
	}

	renderPosts = (posts: object[]) => (
		<Posts
			posts={posts}
			icon="remove"
			iconColor="red"
			onPostDelete={this.onPostDelete}
		/>
	);

	renderOfflineBadge = () => {
		return (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{props => (
					<span style={props}>
						<Label color="red">offline</Label>
					</span>
				)}
			</Spring>
		);
	};

	onSubmit = (eve: object | any) => {
		eve.preventDefault();
		const { title, description, posts } = this.state;
		if (title.trim() === '') {
			// warning
			return;
		}
		const post = {
			id: Math.floor(Math.random() * 30) + 4,
			title,
			author: 'someone',
			body: description,
			read_it: false
		};

		this.setState(() => ({
			posts: [...posts, post]
		}));
	};

	onChange = (eve: any) => {
		const { name, value } = eve.target;
		this.setState({
			[name]: value
		});
	};

	onPostDelete = (id: number | string) => {
		const { posts } = this.state;
		this.setState({
			posts: [...posts.filter((post:any) => id !== post.id)]
		});
	};
}
export default App;
