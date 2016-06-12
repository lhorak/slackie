import { combineReducers } from 'redux';
import channels, * as fromChannels from './reducers/channels'
import users, * as fromUsers from './reducers/users'
import loggedUser from './reducers/loggedUser'
import directMessages from './reducers/directMessages'
import openedChat from './reducers/openedChat'
import searchResults from './reducers/searchResults'

import concat from 'lodash/concat';
import sortBy from 'lodash/sortBy';

const reducer = combineReducers({
    loggedUser,
    channels,
    directMessages,
    users,
    openedChat,
    searchResults
});

export default reducer;

export const searchMessagesForTerm = (state, term) => {
    const messagesFromChannels = fromChannels.searchMessagesInChannels(state.channels, term);
    const messagesFromUsers    = fromUsers.searchDirectMessages(state.users, term);

    return sortBy(concat(messagesFromChannels, messagesFromUsers), ['message.timestamp', 'targetId'])
}