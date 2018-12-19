import React, { SFC } from 'react';
import { Container, Icon } from 'semantic-ui-react';

interface IProps {
	title: string;
	icon?: any;
	onClick?: (e: any) => void;
}

const Header: SFC<IProps> = ({ title, onClick, icon }) => {
	return (
		<Container className="header">
			<h2 onClick={onClick}>
				{icon && <Icon loading inverted name={icon} color="black"/>}
				{title}
			</h2>
		</Container>
	);
};
export default Header;
