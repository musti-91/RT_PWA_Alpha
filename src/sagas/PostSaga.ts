import { call, put } from 'redux-saga/effects'
import PostActions from '../redux/PostRedux'


export function* fetchPosts( api: any ) {
  const response = yield call( api.get )// that's will trigger fetchpostStat
  if ( Array.isArray( response ) ) {
    yield put( PostActions.fetchPostsSuccess( response ) )
  } else {
    yield put( PostActions.fetchPostsFailure( response ) )
  }
}