import React, { SFC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

interface IProps {
	content: string;
	icon?: any;
	color?: any;
	loading?: boolean;
	onClick?: (e: any) => void;
}

const DefaultButton: SFC<IProps> = ({
	content,
	icon,
	color,
	onClick,
	loading
}) => {
	return (
		<Button onClick={onClick} color="teal" className="button">
			{icon && (
				<Icon name={icon} color={color} loading={loading} />
			)}
			{content}
		</Button>
	);
};

export default DefaultButton;
