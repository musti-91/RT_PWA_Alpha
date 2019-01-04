import { UserState } from './../redux/User/types';
import { History } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddlaware from 'redux-saga'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import { IAppState, rootReducer, rootSaga} from '../redux'



export default function configureStore(history: History, initialState: IAppState ): Store<IAppState> {

  const composeEnhancers = composeWithDevTools({})
  const sagaMiddlaware = createSagaMiddlaware()

  const store = createStore(
              connectRouter(history)(rootReducer),
              initialState,
              composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddlaware), thunk, createLogger()))

    sagaMiddlaware.run(rootSaga)
    return store
}