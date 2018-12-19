import React, { SFC } from 'react';
import { FormProps } from 'semantic-ui-react';

interface IForm extends FormProps {
	onSubmit: (e:any) => void;
	onChange: (e: any) => void;
	value?: string;
}

const InputField: SFC<IForm> = ({ onSubmit, onChange, value }) => {
	return (
		<form onSubmit={onSubmit} className="form">
			<input onChange={onChange} value={value}/>
			<button onClick={onSubmit}>Add</button>
		</form>
	);
};

export default InputField;
