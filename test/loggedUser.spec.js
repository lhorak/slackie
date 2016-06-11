import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import loggedUser from '../src/reducers/loggedUser'
import { SET_USER_STATUS } from '../src/ActionTypes'
describe('loggedUser', () => {
    it('creates default state', () => {
        const state = loggedUser(undefined, {type: null});

        expect(state).to.equal();
    });

    const store = createStore(loggedUser);

    it('sets user state to online', () => {
        store.dispatch({type: SET_USER_STATUS, status: 'online'});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal('online');

    });

    it('sets user state to offline', () => {
        store.dispatch({type: SET_USER_STATUS, status: 'offline'});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal('offline');
    });

    it('sets user state to away', () => {
        store.dispatch({type: SET_USER_STATUS, status: 'away'});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal('away');

    })
});