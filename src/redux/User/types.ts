/**
 * apiresponse for users: http://localhost:2000/users
 */
export interface User extends UserApiResponse {
  id: number | string;
  gender: string;
  first: string;
  last: string;
  title?: string;
  location?:object;
  email: string;
  age: number;
  phone?: string;
  mobile?: string;
  picture: object;
  nat?: string;
  registered?: object;
}

export type UserApiResponse = Record<string, any>

export interface UserSelectedPayload {
  users: User[]
}

export enum UserActionTypes {
  FETCH_REQUEST = "@@user/FETCH_REQUEST",
  FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
  FETCH_ERROR = '@@user/FETCH_ERROR',
  SELECT_USER = "@@user/SELECT_USER",
  SELECTED_USER = "@@user/SELECTED_USER",
}

export interface UserState {
  readonly fetching: boolean
  readonly users: User[]
  readonly fetchingError?: string | any
}