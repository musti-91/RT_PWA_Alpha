import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './assets/index.scss';

import App from './containers/App';

import * as serviceWorker from './serviceworker/serviceWorker';

const appName = 'RTS_PWA_Alpha';
ReactDOM.render(<App appName={appName} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
