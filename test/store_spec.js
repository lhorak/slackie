import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';

import makeStore from '../src/store';

describe('store', () => {
    it('creates store for the app', () => {
        const store = makeStore();

        expect(store.getState()).to.equal(Map());
        
    })
});