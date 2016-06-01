import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import channels from './reducers/Channels'
import { Map } from 'immutable'

export default function configureStore(initialState) {
    const store = createStore(channels, initialState, window.devToolsExtension && window.devToolsExtension());
    return store;
}