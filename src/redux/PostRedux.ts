
import { createActions, createReducer } from 'reduxsauce'
import immutable from 'seamless-immutable'

// types and creators
const { Types, Creators } = createActions( {
  // posts
  fetchPostsStart: null,
  fetchPostsSuccess: null,
  fetchPostsFailure: null,
  resetFetchPostsError: null,
} )

export const PostTypes = Types
export default Creators

// state
const INITIAL_STATE = immutable( {
  busyFetchingPosts: false,
  posts: [],
  fetchPostsError: null
} )
// actions
export const fetchPostsStart = ( state: any ) => state.merge( {
  busyFetchingPosts: true,
  posts: [],
  fetchPostsError: null
} )
export const fetchPostsSuccess = ( state: any, { posts }: any ) => state.merge( {
  busyFetchingPosts: false,
  posts: [...posts],
  fetchPostsError: null
} )
export const fetchPostsFailure = ( state: any, { error }: any ) => state.merge( {
  busyFetchingPosts: false,
  fetchPostsError: error
} )
export const resetFetchPostsError = ( state: any ) => state.merge( { fetchPostsError: null } )

//reducer
export const PostReducer = createReducer( INITIAL_STATE, {
  [Types.FETCH_POSTS_START]: fetchPostsStart,
  [Types.FETCH_POSTS_SUCCESS]: fetchPostsSuccess,
  [Types.FETCH_POSTS_FAILURE]: fetchPostsFailure,
  [Types.RESET_FETCH_POSTS_FAILURE]: resetFetchPostsError,
} )