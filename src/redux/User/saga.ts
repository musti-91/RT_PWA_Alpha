import { call, put, takeEvery, fork, all } from 'redux-saga/effects'
import { callApi } from "../../utils/callapi"

import { fetchSuccess, fetchError } from './actions'
import { addMessageError } from '../../utils/helper'
import { UserActionTypes } from './types';


const API_ENDPOINT = "http://localhost:2000"

function* handleFetchUsers(){
  try {
    const res = yield call(callApi, "get", API_ENDPOINT, "/users")
    if(res.results.length !== 0) {
      yield put(fetchSuccess(res.results))
    } else {
      const error = addMessageError(res, "fetch users error")
      yield put(fetchError(error))
    }
  } catch(err) {
    if(err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError("unknown error occured."))
    }
  }
}

function* watchFetchRequest(){
  yield takeEvery(UserActionTypes.FETCH_REQUEST, handleFetchUsers)
}

function* userSaga(){
  yield all([fork(watchFetchRequest)])
}

export default userSaga