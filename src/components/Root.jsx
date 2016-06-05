// NPM imports
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

// Custom imports
import configureStore       from '../store'
import AppContainer         from '../containers/AppContainer'

// Configure redux store
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <Route path="/messages/:userName" component={AppContainer}/>
                <Route path="/channel/:channelName" component={AppContainer}/>
            </Route>
        </Router>
    </Provider>
);

export default Root