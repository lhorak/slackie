import { OPEN_CHAT_WINDOW, CLOSE_DIRECT_MESSAGE } from '../ActionTypes';

const closeDirectMessage = id => ({
    type: CLOSE_DIRECT_MESSAGE, id: id, chatType: 'directMessage'
});

export default closeDirectMessage;