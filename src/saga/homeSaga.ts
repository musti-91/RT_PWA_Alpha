import { put, call } from 'redux-saga/effects'
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../redux/home/actions'

import { showErrorMessage } from '../utils/helper'

export function* fetchUsers(api: object | any) {
  yield put(fetchUsersStart())

  let {results} = yield call(api.get)

  if(results.length !== 0 ) {
    yield put(fetchUsersSuccess(results))
  } else {
    let error = showErrorMessage(results, 'Loading users failed')
    yield put(fetchUsersFailure(error))
  }
}
