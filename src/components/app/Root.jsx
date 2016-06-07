// NPM imports
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Custom imports
import configureStore       from '../../store'
import AppContainer         from '../../containers/AppContainer'
import ChannelDetailContainer from '../../containers/ChannelDetailContainer'
import WelcomeContainer from '../../containers/WelcomeContainer'

// Configure redux store
const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={WelcomeContainer}/>
                <Route path="/messages/:userName" component={ChannelDetailContainer}/>
                <Route path="/channel/:channelName" component={ChannelDetailContainer}/>
            </Route>
        </Router>
    </Provider>
);

export default Root