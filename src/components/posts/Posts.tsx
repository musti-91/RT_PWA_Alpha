import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Icon } from 'semantic-ui-react';

interface IProps {
	posts: object[] | any;
	icon?: any;
	iconColor?: any;
	onPostDelete: (id?: any) => void;
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
	render() {
		const { posts, icon, iconColor, onPostDelete } = this.props;

		return posts.map((post: object | any, id: number) => (
			<Spring from={fromOpt} to={toOpt} key={id}>
				{animationStyle => (
					<li className="list" style={animationStyle}>
						<div>
							<h3>{post.title}</h3>
							<span>{post.body}</span>
						</div>
						<div>
							{icon && (
								<span onClick={() => onPostDelete(post.id)}>
									{icon && <Icon name={icon} color={iconColor} />}
									{post.id}
								</span>
							)}
						</div>
					</li>
				)}
			</Spring>
		));
	}
}

const fromOpt = {
	opacity: 0,
	color: 'black',
	transform: 'scale(0.50)'
};
const toOpt = {
	opacity: 1,
	color: 'black',
	transform: 'scale(1.2)'
};
export default Posts;
