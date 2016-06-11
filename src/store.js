import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducers from './reducer'
import { loadState, saveState } from './localSorage'
import throttle from 'lodash/throttle'

export default function configureStore() {
    const persistedState = loadState();
    const store          = createStore(reducers, persistedState, window.devToolsExtension && window.devToolsExtension());
    // const store          = createStore(reducers, persistedState);

    store.subscribe(throttle(() => {
        const currentState = store.getState();
        saveState(
            {
                channels      : currentState.channels,
                directMessages: currentState.directMessages,
                users         : currentState.users,
                loggedUser    : currentState.loggedUser
            }
        );
    }, 1000));


    return store;
}


