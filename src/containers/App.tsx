import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Header from '../components/Header';
import Todos from '../components/Todos';
import InputField from '../components/InputField';

interface IProps {
	appName: string;
	author?: string;
}

interface IState {
	value: string;
	todos: string[];
}

class App extends Component<IProps, IState> {
	state: IState = {
		value: '',
		todos: []
	};
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

	onDeleteClicked = (id: number) => {
		const { todos } = this.state;
		const array = todos.splice(id, 1);

		this.setState(() => ({
			todos: [...todos.filter((todo, index) => id !== index)]
		}));
	};

	render() {
		const { appName, author } = this.props;
		const { value, todos } = this.state;
		return (
			<Container className="app_theme">
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
}
export default App;
