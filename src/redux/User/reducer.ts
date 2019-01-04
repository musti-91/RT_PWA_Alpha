import { Reducer } from 'redux'
import { UserActionTypes, UserState } from './types'

const INITIAL_STATE: UserState = {
  fetching: false,
  users: [],
  fetchingError: undefined
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.FETCH_REQUEST: {
      return { ...state, fetching: true }
    }
    case UserActionTypes.FETCH_SUCCESS: {
      return {...state, fetching: false, users: action.payload }
    }
    case UserActionTypes.FETCH_ERROR: {
      return {...state, fetching: false, fetchingError: action.payload }
    }
    default: {
      return state
    }
  }
}


export { reducer as UserReducer }