import { action } from 'typesafe-actions'
import { UserActionTypes, User } from './types'

export const fetchRequest = () => action(UserActionTypes.FETCH_REQUEST)

export const fetchSuccess = (response: User[]) => action(UserActionTypes.FETCH_SUCCESS, response)

export const fetchError = (message: string|any) => action(UserActionTypes.FETCH_ERROR, message)