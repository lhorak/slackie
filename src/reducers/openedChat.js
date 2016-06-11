import { List, Map } from 'immutable'
import {
    SEND_MESSAGE,
    OPEN_CHAT_WINDOW,
    CLOSE_CHAT_WINDOW,
    OPEN_CHANNEL,
    CREATE_CHANNEL,
    OPEN_DIRECT_MESSAGE,
    CLOSE_DIRECT_MESSAGE
} from '../ActionTypes'


const openedChat = (state = null, action) => {
    switch (action.type) {
        case OPEN_CHANNEL:
        case OPEN_CHAT_WINDOW:
        case OPEN_DIRECT_MESSAGE:
            return {id: action.id, chatType: action.chatType};
        case CLOSE_DIRECT_MESSAGE:
            if (action.id === state.id) {
                return null;
            }
            else {
                return state;
            }
        default:
            return state;
    }
};

export default openedChat;