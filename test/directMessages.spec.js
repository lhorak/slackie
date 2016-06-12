import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import directMessages from '../src/reducers/directMessages'
import openDirectMessage from '../src/actions/openDirectMessage'
import closeDirectMessage from '../src/actions/closeDirectMessage'


describe('directMessages reducer', () => {
    it('creates default List', () => {
        const store = createStore(directMessages);
        expect(store.getState()).to.equal(List());

    });

    it('adds id of user if DM is opened', () => {
        const store = createStore(directMessages);

        store.dispatch(openDirectMessage('12345'));

        expect(store.getState()).to.equal(List(['12345']));
    });

    it('removes id from List when DM is closed', () => {
        const store = createStore(directMessages, List(['111', '222', '333']));

        store.dispatch(closeDirectMessage('222'));

        expect(store.getState()).to.equal(List(['111', '333']));

        store.dispatch(closeDirectMessage('111'));

        expect(store.getState()).to.equal(List(['333']));
    });
});