import React, { SFC } from 'react'
import { FormattedMessage } from 'react-intl';
import { Container } from 'semantic-ui-react';

interface IProps {}

const Post: SFC<IProps>= () => (
	<Container>
		<FormattedMessage id="welcome" description='welcome value' defaultMessage="Welcome"/>
	</Container>
)
export default Post
