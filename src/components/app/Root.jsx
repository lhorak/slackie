// NPM imports
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Custom imports
import configureStore       from '../../store'
import AppContainer         from './AppContainer'
import ChannelDetailContainer from '../channels/ChannelDetailContainer'
import DirectMessageDetail from '../direct_messages/DirectMessageDetail'
import WelcomeContainer from './WelcomeContainer'
import openChannel from '../../actions/openChannel'
import openDirectMessage from '../../actions/openDirectMessage'


import { searchMessagesForTerm } from '../../reducer'


import find from 'lodash/find'
import matchesProperty from 'lodash/matchesProperty'

// Configure redux store
const store = configureStore();


const onChannelEnter = (nextState, replace) => {
    const nextChannelName = nextState.params.channelName;

    const currentState = store.getState();

    if (currentState.channels.has(nextChannelName)) {
        store.dispatch(openChannel(nextChannelName));
    }
    else {
        replace('/');
    }
};

const onDirectMessageEnter = (nextState, replace) => {
    const nextDMUsername = nextState.params.username;
    const currentState   = store.getState();

    const user = find(currentState.users.toJS(), matchesProperty('username', nextDMUsername));

    if (user) {
        store.dispatch(openDirectMessage(user.id));
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
                <Route path="/messages/:username" component={DirectMessageDetail} onEnter={onDirectMessageEnter}/>
                <Route path="/channel/:channelName" component={ChannelDetailContainer} onEnter={onChannelEnter}/>
            </Route>
        </Router>
    </Provider>
);

export default Root

export const searchMessages = (searchTerm) => searchMessagesForTerm(store.getState(), searchTerm);