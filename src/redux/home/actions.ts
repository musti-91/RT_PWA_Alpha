import { Types } from '../../types'

export const fetchUsersStart = () => ({ type: Types.LOADING_USERS_START })

export const fetchUsersSuccess = (data?: any) => ({ type: Types.LOADING_USERS_SUCCESS, data})

export const fetchUsersFailure = (error?:any) => ({ type: Types.LOADING_USERS_FAILURE, error })

export const resetFetchUsersError = () => ({ type: Types.RESET_LOADING_USERS_ERROR })
