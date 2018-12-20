import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { Icon } from 'semantic-ui-react';

interface IProps {
	posts: object[] | any;
	onPostDelete: (id?: any) => void;
	onPostEdit: (id?: number | any, post?: object) => void;
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
		const { posts, onPostDelete, onPostEdit } = this.props;

		return posts.map((post: object | any, id: number) => (
			<Spring from={fromOpt} to={toOpt} key={id}>
				{animationStyle => (
					<li className="list" style={animationStyle}>
						<div>
							<h3>{post.title}</h3>
							<h4>{post.description}</h4>
							<span>{post.author}</span>
						</div>
						<div>
							<span>
								<Icon name="archive" size="small" />
							</span>
							<span>
								<Icon
									name={post.read_it ? 'eye' : 'eye slash outline'}
									size="small"
								/>
							</span>
							<span onClick={() => onPostDelete(post.id)}>
								<Icon name="trash" color="red" size="small" />
							</span>
							<span onClick={() => onPostEdit(post.id, post)}>
								<Icon name="edit" size="small" />
							</span>
							<span>
								<Icon name="send" size="small" />
							</span>
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
