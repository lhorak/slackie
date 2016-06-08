import { CLOSE_PRIVATE_CHAT, OPEN_PRIVATE_CHAT } from '../ActionTypes'
import { Map, List } from 'immutable'


const directMessages = (state = List(), action) => {
    switch (action.type) {
        case CLOSE_PRIVATE_CHAT:
            return state.delete(action.name);
        case OPEN_PRIVATE_CHAT:
            return state.push(action.id);
        default:
            return state;
    }
};

export default directMessages;