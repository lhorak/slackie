import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import channel from '../src/reducers/channels';
import { createChannel } from '../src/actions/createChannel';
import { deleteChannel } from '../src/actions/deleteChannel';


// describe('Channels', () => {
//     it('creates default channels', () => {
//         const nextState = channel(undefined, {type: null});
//
//         expect(nextState).to.equal(
//             Map(
//                 {
//                     'random'  : Map({messages: List()}),
//                     'general' : Map({messages: List()}),
//                     'projectx': Map({messages: List()})
//                 }
//             )
//         );
//     });
//
//     it('adds new channel', () => {
//         const state  = Map();
//         const action = createChannel('newchannel');
//
//
//         const nextState = channel(state, action);
//
//         expect(nextState).to.equal(Map({
//             'newchannel': Map({messages: List()})
//         }));
//
//     });
//
//     it('deletes channel based on name', () => {
//         const state  = Map({'newchannel': Map({messages: List()})});
//         const action = deleteChannel('newchannel');
//
//         const nextState = channel(state, action);
//
//         expect(nextState).to.equal(Map());
//     })
// });