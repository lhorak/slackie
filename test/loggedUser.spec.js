import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import loggedUser, { defaultUser } from '../src/reducers/loggedUser'
import { SET_USER_STATUS } from '../src/ActionTypes'


describe('loggedUser reducer', () => {
    it('creates default state', () => {
        const store = createStore(loggedUser);

        expect(store.getState()).to.equal(defaultUser);
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