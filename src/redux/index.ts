import { combineReducers, Reducer, AnyAction } from 'redux'

import { RootStateType } from '../types'

import { INITIAL_STATE , homeReducer } from './home'

export const initial_state: RootStateType = {
  home: INITIAL_STATE
}

export function createReducer(): Reducer<RootStateType>{
  const reducer = combineReducers<RootStateType>({
    home: homeReducer
  })

  const rootReducer = (state: RootStateType | undefined , action: AnyAction): RootStateType => {
    return reducer(state, action)
  }

  return rootReducer
}