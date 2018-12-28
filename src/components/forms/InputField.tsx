import React, { SFC } from 'react';
import { FormProps } from 'semantic-ui-react';

import DefaultButton from '../buttons/Button';
interface IForm extends FormProps {
	onSubmit?: ( e: any ) => void;
	onChange: ( e: object | any ) => void;
	name?: string;
	value?: string;
	hasButton?: boolean;
	buttonContent?: string | any;
}

const InputField: SFC<IForm> = ( { name, onSubmit, onChange, value, hasButton, buttonContent } ) => {
	return (
		<>
			<div className="field">
				<input
					onChange={onChange}
					value={value}
					placeholder={name}
					name={name}
					autoComplete="off"
				/>
				{hasButton && (
					<DefaultButton
						onClick={onSubmit}
						content={""}
						icon={buttonContent}
					/>
				)}
			</div>
		</>
	);
};

export default InputField;
