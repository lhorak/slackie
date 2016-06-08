import { List, Map } from 'immutable'
import { SEND_MESSAGE, OPEN_CHAT_WINDOW, CLOSE_CHAT_WINDOW, OPEN_CHANNEL, CREATE_CHANNEL } from '../ActionTypes'


const openedChat = (state = null, action) => {
    switch (action.type) {
        case OPEN_CHAT_WINDOW:
        case OPEN_CHANNEL:
        case CREATE_CHANNEL:
            return action.id;
        default:
            return state;
    }
};

export default openedChat;