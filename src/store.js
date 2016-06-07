import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducers from './reducers/AppReducer'
import { loadState, saveState } from './localSorage'
import throttle from 'lodash/throttle'

export default function configureStore() {
    const persistedState = loadState();
    console.log(persistedState);
    const store          = createStore(reducers, persistedState, window.devToolsExtension && window.devToolsExtension());

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));


    return store;
}


