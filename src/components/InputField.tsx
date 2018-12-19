import React, { SFC } from 'react';
import { FormProps } from 'semantic-ui-react';

import Label from './Label';
import DefaultButton from './Button/Button';
interface IForm extends FormProps {
	onSubmit: (e: any) => void;
	onChange: (e: any) => void;
	value?: string;
}

const InputField: SFC<IForm> = ({ onSubmit, onChange, value }) => {
	return (
		<>
			<Label title="sample Todo App with typescript" />
			<form onSubmit={onSubmit} className="form">
				<input onChange={onChange} value={value} />
				<DefaultButton
					onClick={onSubmit}
					content="Add"
					icon="add"
					color="black"
				/>
			</form>
		</>
	);
};

export default InputField;
