import { all, takeEvery } from 'redux-saga/effects'

//various
import { api } from '../utils/api'

// types
import { PostTypes } from '../redux/PostRedux'
import { StartupTypes } from '../redux/StartupRedux'
// sagas
import { startup } from './StartupSaga'
import { fetchPosts } from './PostSaga'

export default ( () => {
  return function* root() {
    yield all( [
      takeEvery( StartupTypes.STARTUP, startup, api ),
      takeEvery( PostTypes.FETCH_POSTS_START, fetchPosts, api )
    ] )
  }
} )()