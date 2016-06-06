import { List, Map } from 'immutable'
import { SEND_MESSAGE, OPEN_CHAT_WINDOW, CLOSE_CHAT_WINDOW } from '../ActionTypes'


const openedChat = (state = Map({id: null, chatType: null}), action) => {
    switch (action.type) {
        case OPEN_CHAT_WINDOW:
            return state.set('id', action.id).set('type', action.chatType);
        case CLOSE_CHAT_WINDOW:
            return state.set('id', null).set('type', null);
        default:
            return state;
    }
}

