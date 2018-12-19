import React, { SFC } from 'react';
import { Container } from 'semantic-ui-react';

interface IProps {
	title: string;
	onClick?: (e: any) => void;
}

const Header: SFC<IProps> = ({ title, onClick}) => {
	return (
		<Container className="header">
			<h2 onClick={onClick}>{title}</h2>
		</Container>
	);
};
export default Header;
