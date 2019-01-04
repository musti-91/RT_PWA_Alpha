import { combineReducers, AnyAction, Action, Dispatch } from "redux"
import { fork, all } from 'redux-saga/effects'

import { UserReducer } from "./User/reducer"
import { UserState } from "./User/types"
import userSaga from "./User/saga"

export interface IAppState {
  user: UserState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}
export const rootReducer = combineReducers<IAppState>({
  user: UserReducer
})

export function* rootSaga(){
  yield all([fork(userSaga)]) // other saga will be here exported
}