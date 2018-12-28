import React, { SFC } from 'react';

import { Checkbox as CheckboxUI } from 'semantic-ui-react';
interface IProps {
	checked: boolean;
	onChange?: (id?: number | any) => void;
	disabled?: boolean;
	label?: string;
}

const Checkbox: SFC<IProps> = ({ disabled, checked, onChange, label }) => {
	return (
		<CheckboxUI
			label={label}
			onChange={onChange}
			checked={checked}
			disabled={disabled}
		/>
	);
};
export default Checkbox;
