import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'
import './assets/index.scss'

import  history from  './utils/history'
import Routing from './routes/Routing'

import * as serviceWorker from './serviceworker/serviceWorker'
import { configureStore } from './store';


const store= configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById( 'root' ) )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
