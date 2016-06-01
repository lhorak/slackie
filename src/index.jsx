import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import configureStore from './store'
import { INITIAL_STATE } from './core'
import AppContainer from './containers/AppContainer'

const appContainer = document.getElementById('slackie');
const store        = configureStore(INITIAL_STATE);

console.log('store', store.getState());


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('slackie')
);
