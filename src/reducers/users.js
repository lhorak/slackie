import { List, Map } from 'immutable';
import v4 from 'node-uuid';
import dummyUsers from '../../dummy_data/users'
import { SEND_DIRECT_MESSAGE } from '../ActionTypes'
import MessageRecord from '../records/MessageRecord'
import forEach from 'lodash/forEach'

/**
 * dummy users list
 * @type {*|Map<K, V>|Map<string, V>}
 */
export const usersList = Map(dummyUsers.map(user => [user.id, Map(user)]));

/**
 * users reducer
 * @param state
 * @param action
 * @returns {*}
 */
function users(state = usersList, action) {
    switch (action.type) {
        case SEND_DIRECT_MESSAGE:
            const message = new MessageRecord({
                userId   : action.loggedUserId,
                message  : action.message,
                id       : v4(),
                timestamp: Date.now()
            });
            return state.updateIn([action.userId, 'messages'], List(), (messages) => messages.push(message));
        default:
            return state;
    }
}

export default users;

/**
 * searchDirectMessages
 * function that searches all the users and their messages for specified
 * string. It uses regexp to match exact phrase anywhere in the text.
 * @param state
 * @param searchTerm
 * @returns {Array}
 */
export const searchDirectMessages = (state, searchTerm) => {
    let results = [];

    let regexSearch = new RegExp(`.*${searchTerm}.*`, 'i');

    const users = state.toJS();
    
    forEach(users, (user, name) => {
        forEach(user.messages, (message, name) => {
            if (regexSearch.test(message.message)) {
                results.push({
                    targetId  : user.id,
                    targetName: user.username,
                    targetType: 'directMessage',
                    message   : message
                });
            }
        });
    });

    return results;
}