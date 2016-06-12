import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import channels, { defaultChannels } from '../src/reducers/channels'
import createChannel from '../src/actions/createChannel'
import sendChannelMessage from '../src/actions/sendChannelMessage'
import ChannelRecord from '../src/records/ChannelRecord'


describe('channels reducer', () => {
    it('creates default channels', () => {
        const store = createStore(channels);

        expect(store.getState()).to.equal(defaultChannels);

    });


    it('adds new channel', () => {
        const store = createStore(channels, Map());
        store.dispatch(createChannel('test_channel'));

        expect(store.getState().count()).to.equal(1);

    });


    it('adds message to channel', () => {
        const store = createStore(channels);
        store.dispatch(createChannel('test_channel'));

        store.dispatch(sendChannelMessage('lhorak', 'test_channel', 'hello world'));
        expect(store.getState().get('test_channel').get('messages').count()).to.equal(1);

        store.dispatch(sendChannelMessage('lhorak', 'test_channel', 'hello again'));
        expect(store.getState().get('test_channel').get('messages').count()).to.equal(2);
    })
});