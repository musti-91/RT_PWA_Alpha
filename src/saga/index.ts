import { takeEvery, all } from 'redux-saga/effects'

import { Types } from '../types'
import { fetchUsers } from './homeSaga'

const url = "https://randomuser.me/api/?nat=us&results=10"

const fetchUsersApi = {
  get: () => fetch(url).then(res => res.json()).then(res => res.results),
}


export default function* root(){
    yield all([
      takeEvery(Types.LOADING_USERS_START, fetchUsers, fetchUsersApi)
    ])
}