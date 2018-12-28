import React, { Component } from 'react';
import { Transition } from 'react-spring';
import CardTitle from '../label/CardTitle';
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem';
import ListItem from '../ListItem'
interface IProps {
	posts: object[] | any;
	onPostDelete: ( id?: any ) => void;
	onPostEdit: ( id?: number | any, post?: object ) => void;
	onPostClicked: ( id: number | string ) => void;
	onAddToFavourite: ( id: number | string ) => void;
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
	state = { show: true };
	render() {
		const {
			posts,
			onPostDelete,
			onPostEdit,
			onPostClicked,
			onAddToFavourite
		} = this.props;
		const {show } = this.state;

		return posts.map( ( post: any ) => (
			<Transition from={fromOpt} enter={enterOpt} leave={leaveOpt} items={show}>
				{show => animationStyle => (
					<ListItem
						customStyle="list-item"
						style={animationStyle}
						onClick={() => onPostClicked( post.id )}
					>
						<CardTitle title={post.title} body={post.body} icon="user" data={post.userId} />
						<Menu>
							<MenuItem onClick={() => onAddToFavourite( post.id )} iconName={post.fav ? 'heart' : 'heart outline'} size="small" color={post.fav ? 'red' : 'grey'} />

							<MenuItem iconName={post.read_it ? "eye" : "eye slash outline"} size='small' />

							<MenuItem onClick={() => onPostDelete( post.id )} iconName='trash' color="red" size="small" />

							<MenuItem onClick={() => onPostEdit( post.id, post )} iconName="edit" size="small" />

							<MenuItem iconName="send" size="small" />
						</Menu>
					</ListItem>
				)}
			</Transition>
		) );
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
