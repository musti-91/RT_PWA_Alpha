import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { PostReducer } from './PostRedux'
import { createLogger } from 'redux-logger'

export default ( () => {
  const middlewares = []
  const enhancers = []

  const rootReducers = combineReducers( {
    posts: PostReducer,
  } )

  const sagaMiddleware = createSagaMiddleware()
  middlewares.push( sagaMiddleware )

  const logger = createLogger()
  middlewares.push( logger )

  enhancers.push( applyMiddleware( ...middlewares ) )

  const store = createStore( rootReducers, compose( ...enhancers ) )

  // sagaMiddleware.run(fetchPostsStart)
  return store
} )()