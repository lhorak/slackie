import { combineReducers } from 'redux'
import all from './allChannels'
import opened from './openedChannels'

import messages from '../messages'

const channels = combineReducers({
    all   : all,
    opened: opened
});

export default channels;

export const getChannelMessages = (state, channelId) => {
    return state.get(channelId).get('messages');
};