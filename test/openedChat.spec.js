import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import openedChat from '../src/reducers/openedChat'
import { OPEN_CHANNEL, OPEN_CHAT_WINDOW, OPEN_DIRECT_MESSAGE, CLOSE_DIRECT_MESSAGE } from '../src/ActionTypes'

import openChannel from '../src/actions/openChannel'
import openDirectMessage from '../src/actions/openDirectMessage'
import closeDirectMessage from '../src/actions/closeDirectMessage'


describe('openedChat reducer', () => {
    it('creates default state', () => {
        const store = createStore(openedChat);

        expect(store.getState()).to.not.exist;
    });

    const store = createStore(openedChat);

    it('reduces on action type OPEN_CHANNEL', () => {
        store.dispatch({type: OPEN_CHANNEL, id: 'aaa', chatType: 'channel'});

        expect(store.getState()).to.have.property('id').that.equals('aaa');
        expect(store.getState()).to.have.property('chatType').that.equals('channel');
    });

    it('reduces on action type OPEN_CHAT_WINDOW', () => {
        store.dispatch({type: OPEN_CHAT_WINDOW, id: 'bbb', chatType: 'directMessage'});

        expect(store.getState()).to.have.property('id').that.equals('bbb');
        expect(store.getState()).to.have.property('chatType').that.equals('directMessage');
    });

    it('reduces on action type OPEN_DIRECT_MESSAGE', () => {
        store.dispatch({type: OPEN_DIRECT_MESSAGE, id: 'johhnyive', chatType: 'directMessage'});

        expect(store.getState()).to.have.property('id').that.equals('johhnyive');
        expect(store.getState()).to.have.property('chatType').that.equals('directMessage');
    });

    it('reduces on action type CLOSE_DIRECT_MESSAGE', () => {
        store.dispatch({type: CLOSE_DIRECT_MESSAGE, id: 'johhnyive'});

        expect(store.getState()).to.be.null;
    });

    it('reduces action openChannel()', () => {
        store.dispatch(openChannel('random'));

        expect(store.getState()).to.have.property('id').that.equals('random');
        expect(store.getState()).to.have.property('chatType').that.equals('channel');
    });

    it('reduces action openDirectMessage()', () => {
        store.dispatch(openDirectMessage('123456789'));

        expect(store.getState()).to.have.property('id').that.equals('123456789');
        expect(store.getState()).to.have.property('chatType').that.equals('directMessage');
    });

    it('reduces action closeDirectMessage()', () => {
        store.dispatch(closeDirectMessage('123456789'));

        expect(store.getState()).to.be.null;
    });
});