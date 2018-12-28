import { Dispatch as ReduxDispatch, Action } from 'redux'
import { Immutable } from 'seamless-immutable'

export interface PostsState {
  busyLoading: boolean
  posts: object[]
  locale: string
}

export type PostsStateType = Immutable<PostsState>


interface RootState {
  posts: PostsStateType
}

export type Dispatch = ReduxDispatch<Action>