import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import { createStore } from 'redux'
import users, { usersList } from '../src/reducers/users'
import { OPEN_CHANNEL, OPEN_CHAT_WINDOW, OPEN_DIRECT_MESSAGE, CLOSE_DIRECT_MESSAGE } from '../src/ActionTypes'

import openChannel from '../src/actions/openChannel'
import openDirectMessage from '../src/actions/openDirectMessage'
import closeDirectMessage from '../src/actions/closeDirectMessage'


describe('users reducer', () => {
    it('creates default state with users', () => {
        const store = createStore(users);

        expect(store.getState()).to.equal(usersList);
    });
});