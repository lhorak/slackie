import { combineReducers } from 'redux';
import channels, * as fromChannels from './reducers/channels/channels'
import users from './reducers/users'
import loggedUser from './reducers/loggedUser'
import directMessages from './reducers/directMessages'
import openedChat from './reducers/openedChat'


const reducer = combineReducers({loggedUser, channels, directMessages, users, openedChat});

export default reducer;

export const getChannelMessages = (state, channelId) => {
    fromChannels.getChannelMessages(state.messages, channelId);
}

export const getDirectMessages = (state, userId) => {
    return [];
}