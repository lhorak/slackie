import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import { DEFAULT_CHANNELS } from '../src/defaults'
import channels from '../src/reducers/channels/channels'
import createChannel from '../src/actions/createChannel'
import sendChannelMessage from '../src/actions/sendChannelMessage'
describe('channels reducer', () => {
    it('creates default channels', () => {
        const store = createStore(channels);

        expect(store.getState()).to.equal(Map());

    });


    it('adds new channel', () => {
        const store = createStore(channels);
        const expectedState = Map().set('test_channel', Map({
            name    : 'test_channel',
            purpose : undefined,
            messages: List()
        }));
        store.dispatch(createChannel('test_channel'));

        expect(store.getState()).to.equal(expectedState);

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