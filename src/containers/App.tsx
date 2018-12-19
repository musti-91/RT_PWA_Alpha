import React, { Component } from 'react';
import { Container, Label, Icon } from 'semantic-ui-react';
import { Spring } from 'react-spring';

import Header from '../components/Label/Header';
import Todos from '../components/list/Todos';
import InputField from '../components/forms/InputField';

interface IProps {
	appName: string;
	author?: string;
}

interface IState {
	value: string;
	todos: string[];
	offline: boolean;
}

class App extends Component<IProps, IState> {
	state: IState = {
		value: '',
		todos: ['Read book', 'Play Basketball'],
		offline: !navigator.onLine
	};

	componentDidUpdate() {
		window.addEventListener('online', this.onOfflineMode);
		window.addEventListener('offline', this.onOfflineMode);
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.onOfflineMode);
		window.removeEventListener('offline', this.onOfflineMode);
	}

	onClick = (e: any) => {
		window.location.reload();
	};

	onChange = (e: any) => {
		const { value } = e.target;
		this.setState({ value: value });
	};

	onSubmit = (e: any) => {
		e.preventDefault();
		const { value, todos } = this.state;
		if (value.trim() !== '') {
			this.setState({
				todos: [...todos, value],
				value: ''
			});
		}
	};

	onOfflineMode = () => this.setState(() => ({ offline: !navigator.onLine }));

	onDeleteClicked = (id: number) => {
		const { todos } = this.state;
		const array = todos.splice(id, 1);

		this.setState(() => ({
			todos: [...todos.filter((todo, index) => id !== index)]
		}));
	};

	render() {
		const { appName, author } = this.props;
		const { offline, value, todos } = this.state;
		return (
			<Container className="app_theme">
				{offline && this.renderOfflineBadge()}
				<Header title={appName} onClick={this.onClick} icon="react" />
				<InputField
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					value={value}
				/>
				{todos.length !== 0 && (
					<Todos
						items={todos}
						icon="remove"
						iconColor="red"
						onTodoDeleteClicked={this.onDeleteClicked}
					/>
				)}
			</Container>
		);
	}

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
}
export default App;
