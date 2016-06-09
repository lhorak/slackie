// NPM imports
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Custom imports
import configureStore       from '../../store'
import AppContainer         from '../../containers/AppContainer'
import ChannelDetailContainer from '../../containers/ChannelDetailContainer'
import WelcomeContainer from '../../containers/WelcomeContainer'
import openChannel from '../../actions/openChannel'
import openDirectMessage from '../../actions/openDirectMessage'

// Configure redux store
const store = configureStore();


const onChannelEnter = (nextState, replace) => {
    const nextChannelName = nextState.params.channelName;
    console.log(nextChannelName);

    const currentState = store.getState();

    if (currentState.channels.has(nextChannelName)) {
        store.dispatch(openChannel(nextChannelName));
    }
    else {
        replace('/');
    }
};

const onDirectMessageEnter = (nextState, replace) => {
    const nextDMUsername = nextState.params.channelName;
    const currentState   = store.getState();

    if (currentState.users.hasIn(['nick'], nextDMUsername)) {
        store.dispatch(openDirectMessage(nextDMUsername));
    }
    else {
        replace('/');
    }
};

const Root = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={WelcomeContainer}/>
                <Route path="/messages/:userName" component={ChannelDetailContainer} onEnter={onDirectMessageEnter}/>
                <Route path="/channel/:channelName" component={ChannelDetailContainer} onEnter={onChannelEnter}/>
            </Route>
        </Router>
    </Provider>
);

export default Root