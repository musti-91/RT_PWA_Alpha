import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { api } from '../utils/api';

import Posts from '../components/posts/Posts';
import InputField from '../components/forms/InputField';

interface IProps {
	appName?: string | any;
	author?: string | any;
	style: any;
}

interface IState {
	title: string;
	[x: string]: any;
	body: string | any;
	posts: object[];
	edit: boolean;
	postId: string | number /* post id to edit */;
}

class PostsContainer extends Component<IProps, IState> {
	state: IState = {
		posts: [],
		postId: '',
		title: '',
		body: '',
		edit: false
	};

	componentDidMount() {
		this.fetchPosts().then(res => this.addPostsToState(res));
	}

	render() {
		const { appName } = this.props;
		const { offline, posts, title, body } = this.state;
		return (
			<Container className="app_theme">
				<InputField
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					hasButton
					buttonContent="add"
					name="title"
					value={title}
				/>
				<InputField
					onChange={this.onChange}
					onSubmit={this.onSubmit}
					name="body"
					value={body}
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
			onPostClicked={this.onPostClicked}
			onAddToFavourite={this.addToFavourite}
		/>
	);

	onSubmit = (eve: object | any) => {
		eve.preventDefault();
		const { title, body, posts, edit, postId } = this.state;
		if (title.trim() === '') {
			// warning
			return;
		}

		const post = {
			title,
			userId: Math.floor(Math.random() * 10),
			body,
			read_it: false
		};

		if (!edit) {
			api.post(post).then(postId =>
				this.setState({
					posts: [{ id: postId.id, ...post }, ...posts],
					title: '',
					body: '',
					postId: '',
					edit: false
				})
			);
		} else {
			api.put(postId, post).then(updatedPost => this.updateState(updatedPost));
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
		api.delete(id);
	};

	onPostEdit = (id: number | any, post: object | any) => {
		this.setState({
			title: post.title,
			body: post.body,
			edit: true,
			postId: id,
		});
	};

	onPostClicked = (id: number | string) => {
		///route to the page
	};

	addToFavourite = (id: any) => {
		const { posts } = this.state;
		posts.forEach((post: any) => {
			if (post.id === id && !post.fav) {
				api
					.put(id, { ...post, fav: true })
					.then((updatedPost: object | any) => this.updateState(updatedPost));
			}
		});
	};

	fetchPosts = async () => await api.get();

	updateState = (updatedPost: any) => {
		const { posts } = this.state;
		this.setState({
			posts: [...posts.filter((post: any) => post.id !== updatedPost.id), updatedPost ],
			title: '',
			body: '',
			postId: '',
			edit: false
		});
	};

	addPostsToState = (posts: object[]) => {
		if (posts.length >= 50) {
			posts.length = 10;
			this.setState(() => ({ posts: [...posts] }));
		}
	};

	onHeaderTitleClicked = (e: any) => window.location.reload();
}
export default PostsContainer;
