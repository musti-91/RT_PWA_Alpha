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
							<h4>{post.body}</h4>
							<span>{post.author}</span>
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
	transform: `scale(0.90) translateX(90%)`,
	transition: `transform 300ms`
};
const toOpt = {
	opacity: 1,
	transform: 'scale(1.2) translateX(0)',
	transition: `transform 300ms`
};
export default Posts;
