import * as history from './utils/history'
import configureStore from './store'

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

export default store
