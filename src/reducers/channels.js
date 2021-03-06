import { List, Map } from 'immutable';
import { CREATE_CHANNEL, SEND_CHANNEL_MESSAGE } from '../ActionTypes'
import { v4 } from 'node-uuid'
import MessageRecord from '../records/MessageRecord'
import ChannelRecord from '../records/ChannelRecord'

import forEach from 'lodash/forEach'

// Default channels when they are not initialized
export const defaultChannels = Map({
    'general': new ChannelRecord({name: 'general', purpose: 'just a general talk'}),
    'random' : new ChannelRecord({name: 'random', purpose: 'get wild here! Send funny pics, videos or whatever..'})
});

/**
 * Channels reducer
 * takes care of all the channels
 * @param state if state is not provided, default channels (immutable.js Map) is provided
 * @param action Action
 * @returns {state} always returns state. When no action is matched, it returns current state
 */
const channels = (state = defaultChannels, action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            if (state.has(action.name)) {
                return state;
            }
            else {
                const channel = new ChannelRecord({
                    name   : action.name,
                    purpose: action.purpose
                });
                return state.set(action.name, channel);
            }
        case SEND_CHANNEL_MESSAGE:
            const message = new MessageRecord({
                userId   : action.userId,
                message  : action.message,
                id       : v4(),
                timestamp: Date.now()
            });

            return state.updateIn([action.channelId, 'messages'], List(), (messages) => messages.push(message));
        default:
            return state;
    }
};

export default channels;

/**
 * Function for searching messages inside all channels
 * @param state
 * @param searchTerm term for which the search is initiated
 * @returns {Array} Array of search results
 */
export const searchMessagesInChannels = (state, searchTerm) => {
    let results     = [];
    let regexSearch = new RegExp(`.*${searchTerm}.*`, 'i');

    const channels = state.toJS();

    forEach(channels, (channel) => {
        forEach(channel.messages, (message) => {
            if (regexSearch.test(message.message)) {
                results.push({
                    targetId  : channel.name,
                    targetName: channel.name,
                    targetType: 'channel',
                    message   : message
                });
            }
        });
    });

    return results;
}