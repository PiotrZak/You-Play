import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';

import App from './App';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import './designsystem.scss';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

//serviceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();