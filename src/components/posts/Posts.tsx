import React, { Component } from 'react';
import { Transition } from 'react-spring';
import { Icon } from 'semantic-ui-react';

interface IProps {
	posts: object[] | any;
	onPostDelete: (id?: any) => void;
	onPostEdit: (id?: number | any, post?: object) => void;
	onPostClicked: (id: number | string) => void;
	onAddToFavourite: (id: number | string) => void;
}
/**
 * post : {
 * id:"",
 * title,
 * body,
 * userId,
 * read_it
 * }
 */

class Posts extends Component<IProps> {
	state = {
		showShareMenu: false,
		show: true
	};
	render() {
		const {
			posts,
			onPostDelete,
			onPostEdit,
			onPostClicked,
			onAddToFavourite
		} = this.props;
		const { showShareMenu, show } = this.state;

		return posts.map((post: any) => (
			<Transition from={fromOpt} enter={enterOpt} leave={leaveOpt} items={show}>
				{show => animationStyle => (
					<li
						className="list"
						style={animationStyle}
						onClick={() => onPostClicked(post.id)}
					>
						<div>
							<h3>{post.title}</h3>
							<h4>{post.body}</h4>
							<span>
								<Icon name="sun" color="yellow" />
								{post.userId}
							</span>
						</div>
						<div className="list_icons">
							<span onClick={() => onAddToFavourite(post.id)}>
								<Icon
									name={post.fav ? 'heart' : 'heart outline'}
									size="small"
									inverted
									color={post.fav ? 'red' : 'grey'}
								/>
							</span>
							<span>
								<Icon
									name={post.read_it ? 'eye' : 'eye slash outline'}
									size="small"
									inverted
								/>
							</span>
							<span onClick={() => onPostDelete(post.id)}>
								<Icon name="trash" color="red" size="small" />
							</span>
							<span onClick={() => onPostEdit(post.id, post)}>
								<Icon name="edit" size="small" inverted />
							</span>
							<span>
								<Icon name="send" size="small" inverted />
							</span>
						</div>
					</li>
				)}
			</Transition>
		));
	}
}

// onShareClickedMenu = () => {
// 	const { showShareMenu } = this.state;
// 	this.setState(() => ({ showShareMenu: !showShareMenu }));

// 	setTimeout(
// 		() => this.setState(() => ({ showShareMenu: !this.state.showShareMenu })),
// 		1500
// 	);
// };

// // this function will do his job later
// showShareMenu = async (post: object | any) => {
// 	// let text = post.title + post.description;
// 	const from = {
// 		opacity: 0,
// 		transfrom: 'rotate(180deg) translate(-100%, 0%)',
// 		color: '#fff'
// 	};
// 	const to = {
// 		opacity: 1,
// 		transform: 'rotate(90deg) translate(-100%, -40%)',
// 		color: '#fff'
// 	};
// 	// 	await navigator.clipboard.writeText(text); // not suppoortted
// 	return (
// 		<Spring from={from} to={to}>
// 			{styles => <span style={styles}>copied</span>}
// 		</Spring>
// 	);
// };

const fromOpt = {
	opacity: 0,
	transform: 'translate3d(0,-40px,0)'
};
const enterOpt = {
	opacity: 1,
	transform: 'translate3d(0,0px,0)'
};
const leaveOpt = {
	opacity: 0,
	transform: 'translate3d(0,-40px,0)'
};
export default Posts;
