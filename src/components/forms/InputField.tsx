import React, { SFC } from 'react';
import { FormProps } from 'semantic-ui-react';

import DefaultButton from '../buttons/Button';
interface IForm extends FormProps {
	onSubmit?: (e: any) => void;
	onChange: (e: object | any) => void;
	name?: string;
	value?: string;
	hasButton?: boolean;
}

const InputField: SFC<IForm> = ({
	name,
	onSubmit,
	onChange,
	value,
	hasButton,
	placeholder
}) => {
	return (
		<>
			<form onSubmit={onSubmit} className="form">
				<input
					onChange={onChange}
					value={value}
					placeholder={name}
					name={name}
					autoComplete="off"
				/>
				{hasButton && (
					<DefaultButton onClick={onSubmit} content="Add" icon="add"/>
				)}
			</form>
		</>
	);
};

export default InputField;
