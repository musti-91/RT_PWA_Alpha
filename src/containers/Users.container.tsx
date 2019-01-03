import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Container } from 'semantic-ui-react'

import { RootStateType, Dispatch } from '../types'
import { fetchUsersStart, fetchUsersSuccess } from '../redux/home/actions'


interface IProps {
  users: object[]
  loading: boolean
  error: any
}
const mapStateToProps = (state: RootStateType ): IProps => ({
  loading: state.home.loading,
  users: state.home.users,
  error: state.home.users
})

interface IDispatch {
  fetchUsersStart():{}
  fetchUsersSuccess(data: any): {}

}
const mapDispatchToProps = (dispatch: Dispatch): IDispatch => ({
  fetchUsersStart: () => dispatch(fetchUsersStart()),
  fetchUsersSuccess: (data:any) => dispatch(fetchUsersSuccess(data))
})

class Users extends Component<IProps&IDispatch>{

  componentDidMount(){ }

  render(){
    const { users } = this.props
    let user = users.map((user:any) => <li key={user.id.value}>{user.name.first}</li>)
    return (
      <Container>
        {user}
      </Container>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)