import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { api } from '../utils/api';

import Posts from '../components/posts/Posts';
import InputField from '../components/forms/InputField';

interface IProps {
	appName?: string | any;
	author?: string | any;
}

interface IState {
	title: string;
	[x: string]: any;
	description: string | any;
	posts: object[];
	edit: boolean;
	postId: string | number /* post id to edit */;
}

class PostsContainer extends Component<IProps, IState> {
	state: IState = {
		posts: [],
		postId: '',
		title: '',
		description: '',
		edit: false
	};

	componentDidMount() {
		this.fetchPosts().then(res => this.addPostToState(res));
	}

	render() {
		const { appName } = this.props;
		const { offline, posts, title, description } = this.state;
		return (
			<Container className="app_theme">
				{/* <Header title={appName} onClick={this.onHeaderTitleClicked} /> */}
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
			onPostClicked={this.onPostClicked}
		/>
	);
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
			api.post(post).then(postId =>
				this.setState({
					posts: [...posts, { id: postId.id, ...post }],
					title: '',
					description: '',
					postId: '',
					edit: false
				})
			);
		} else {
			api.put(postId, post).then(updatedPost =>
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
		api.delete(id);
	};

	onPostEdit = (id: number | any, post: object | any) => {
		this.setState({
			title: post.title,
			description: post.description,
			edit: true,
			postId: id
		});
	};

	onPostClicked = (id: number | string) => {
		///route to the page
	};
	fetchPosts = async () => await api.get();

	addPostToState = (posts: object[]) =>
		this.setState(() => ({ posts: [...posts] }));

	onHeaderTitleClicked = (e: any) => window.location.reload();

}
export default PostsContainer;
