import { put } from 'redux-saga/effects'

import PostActions from '../redux/PostRedux'

export function* startup( api: any ) {
  yield put( PostActions.fetchPostsStart( api ) )
}