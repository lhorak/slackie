import { OPEN_CHAT_WINDOW } from '../ActionTypes';

const openDirectMessage = id => ({
    type: OPEN_CHAT_WINDOW, id: id, chatType: 'directMessage'
});

export default openDirectMessage;