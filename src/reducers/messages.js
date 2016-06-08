import { List, Map } from 'immutable'
import { SEND_CHANNEL_MESSAGE, SEND_DIRECT_MESSAGE, SEND_MESSAGE } from '../ActionTypes'


const messages = (state = List(), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
        case SEND_CHANNEL_MESSAGE:
            return state.push(
                {
                    targetId : action.targetId,
                    userId   : action.userId,
                    timestamp: new Date(),
                    message  : action.message
                });
        default:
            return state;
    }
}

export default messages;

