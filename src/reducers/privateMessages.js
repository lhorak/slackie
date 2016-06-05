import { CLOSE_PRIVATE_CHAT, OPEN_PRIVATE_CHAT } from '../ActionTypes'
import { Map, List } from 'immutable'


const privateMessages = (state = Map(), action) => {
    switch (action.type) {
        case CLOSE_PRIVATE_CHAT:
            return state.delete(action.name);
        case OPEN_PRIVATE_CHAT:
            return state.set(action.name, Map({isOpened: true, messages: List()}));
        default:
            return state;
    }
};

export default privateMessages;