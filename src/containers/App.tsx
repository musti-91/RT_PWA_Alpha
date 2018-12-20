import React, { Component } from 'react';
import { Container, Label, Icon } from 'semantic-ui-react';
import { data } from '../utils/data';
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
	edit: boolean;
	postId: string | number /* post id to edit */;
}

class App extends Component<IProps, IState> {
	state: IState = {
		posts: [],
		postId: '',
		title: '',
		description: '',
		offline: !navigator.onLine,
		edit: false
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

	render() {
		const { appName } = this.props;
		const { offline, posts, title, description } = this.state;
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
					value={title}
				/>
				<InputField
					onChange={this.onChange}
					onSubmit={this.onSubmit}
					hasButton={false}
					name="description"
					value={description}
				/>
				{posts.length !== 0 && this.renderPosts(posts)}
			</Container>
		);
	}

	renderPosts = (posts: object[]) => (
		<Posts
			posts={posts}
			onPostDelete={this.onPostDelete}
			onPostEdit={this.onPostEdit}
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
		const { title, description, posts, edit, postId } = this.state;
		if (title.trim() === '') {
			// warning
			return;
		}

		const post = {
			title,
			author: 'user_name',
			description,
			read_it: false
		};

		if (!edit) {
			data
				.post(post)
				.then(postId =>
					this.setState({
						posts: [...posts, { id: postId.id, ...post }],
						title: '',
						description: '',
						postId: '',
						edit: false
					})
				);
		} else {
			data.put(postId, post).then(updatedPost =>
				this.setState({
					posts: [
						...posts.filter((post: any) => post.id !== updatedPost.id),
						updatedPost
					],
					title: '',
					description: '',
					postId: '',
					edit: false
				})
			);
		}
	};

	onChange = (eve: any) => {
		const { name, value } = eve.target;
		this.setState({
			[name]: value
		});
	};

	onPostDelete = (id: number | string) => {
		const { posts } = this.state;
		this.setState(() => ({
			posts: [...posts.filter((item: any) => item.id !== id)]
		}));
		data.delete(id);
	};

	onPostEdit = (id: number | any, post: object | any) => {
		this.setState({
			title: post.title,
			description: post.description,
			edit: true,
			postId: id
		});
	};

	fetchPosts = async () => await data.get();

	addPostToState = (posts: object[]) =>
		this.setState(() => ({ posts: [...posts] }));

	onHeaderTitleClicked = (e: any) => window.location.reload();

	onOfflineMode = () => this.setState(() => ({ offline: !navigator.onLine }));
}
export default App;
