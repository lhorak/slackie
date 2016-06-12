import { OPEN_DIRECT_MESSAGE, CLOSE_DIRECT_MESSAGE } from '../ActionTypes'
import { Map, List } from 'immutable'

/**
 * Direct messages reducer
 * This one serves for storing the IDs of opened users,
 * it does not store the messages itself.
 * Messages are stored inside every user object
 * @param state
 * @param action
 * @returns {*}
 */
const directMessages = (state = List(), action) => {
    switch (action.type) {
        case CLOSE_DIRECT_MESSAGE:
            return state.delete(state.keyOf(action.id));
        case OPEN_DIRECT_MESSAGE:
            if (state.includes(action.id)) {
                return state;
            }
            else {
                return state.push(action.id);
            }
        default:
            return state;
    }
};

export default directMessages;