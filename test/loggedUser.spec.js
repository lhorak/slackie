import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import { DEFAULT_LOGGED_USER } from '../src/defaults'
import loggedUser from '../src/reducers/loggedUser'
import { STATUS_AWAY, STATUS_ONLINE, STATUS_OFFLINE } from '../src/userStatus'
import { SET_USER_STATUS } from '../src/ActionTypes'
describe('loggedUser', () => {
    it('creates default state', () => {
        const state = loggedUser(undefined, {type: null});

        expect(state).to.equal(DEFAULT_LOGGED_USER);
    });

    const store = createStore(loggedUser);

    it('sets user state to online', () => {
        store.dispatch({type: SET_USER_STATUS, status: STATUS_ONLINE});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal(STATUS_ONLINE);

    });

    it('sets user state to offline', () => {
        store.dispatch({type: SET_USER_STATUS, status: STATUS_OFFLINE});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal(STATUS_OFFLINE);
    });

    it('sets user state to away', () => {
        store.dispatch({type: SET_USER_STATUS, status: STATUS_AWAY});

        const currentStatus = store.getState().get('status');
        expect(currentStatus).to.equal(STATUS_AWAY);

    })
});