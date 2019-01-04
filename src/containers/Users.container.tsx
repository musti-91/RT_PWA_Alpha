import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Store } from 'redux'

import { Container } from 'semantic-ui-react'
import { User } from '../redux/User/types'
import { IAppState } from '../redux'
interface PropsFromState {
  fetching: boolean;
  users: User[];
  fetchingError?: string;
}
interface PropsFromDispatch {
  [key: string]: any
}
interface IOwnProps {
  store: Store<IAppState>,
}
type AllTypes = PropsFromState & PropsFromDispatch & IOwnProps
class Users extends Component<AllTypes>{

  render(){
    console.log(this.props.store)
    return (
      <Container>
        'some users'
      </Container>
    )
  }
}

const mapStateToProps = ({ user }: IAppState) => ({
  fetching : user.fetching,
  users: user.users,
  fetchingError: user.fetchingError
})

export default connect(mapStateToProps)(Users)