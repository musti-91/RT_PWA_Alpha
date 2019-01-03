import { Action, Dispatch as ReduxDispatch } from 'redux';
import { Immutable } from 'seamless-immutable';

export enum Types {
  // Users
  LOADING_USERS_START = "LOADING_USERS_START",
  LOADING_USERS_SUCCESS = "LOADING_USERS_SUCCESS",
  LOADING_USERS_FAILURE ="LOADING_USERS_FAILURE",
  RESET_LOADING_USERS_ERROR ="RESET_LOADING_USERS_ERROR",
}

export interface HomeState {
  loading: boolean
  users: object[]
  error: any
}

export type HomeStateType = Immutable<HomeState>

interface RootState {
  home: HomeStateType
}


export type RootStateType = RootState

export type Dispatch = ReduxDispatch<Action>