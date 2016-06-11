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

/**
 * openedChat reducer
 * serves for storing the state of opened chat.
 * Actions that are triggered on this state are triggered in other reducers
 * as well. This reducer only shows currently opened chat and the type of chat
 * that is opened
 * @param state
 * @param action
 * @returns {state}
 */
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