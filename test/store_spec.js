import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import { DEFAULT_CHANNELS } from '../src/defaults'
import channels from '../src/reducers/channels'
import createChannel from '../src/actions/createChannel'

describe('channels', () => {
    it('creates default channels', () => {
        const store = createStore(channels);

        expect(store.getState()).to.equal(DEFAULT_CHANNELS);
    });


    it('adds new channel', () => {
        const store         = createStore(channels);
        const expectedState = DEFAULT_CHANNELS.push(Map({name: 'test_channel', messages: List()}));
        store.dispatch(createChannel('test_channel'));

        expect(store.getState()).to.equal(expectedState);

    })
});