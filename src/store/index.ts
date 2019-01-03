import { History } from 'history';
import { routerMiddleware } from "react-router-redux"
import { applyMiddleware, Store, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'


import { RootStateType } from '../types'
import rootSaga from '../saga'
import { createReducer, initial_state } from "../redux"

import root from '../saga/index'
const sagaMiddleware = createSagaMiddleware()

export function configureStore(history: History): Store<RootStateType>{

  const middlawares = [ sagaMiddleware, routerMiddleware(history) ]

  const store = createStore<RootStateType, {type:any}, {}, {}>(
                        createReducer(),
                        initial_state,
                        composeWithDevTools(applyMiddleware(...middlawares))
                        )


  sagaMiddleware.run(root)
  return store
}