import { OPEN_CHAT_WINDOW } from '../ActionTypes';

const openChannel = id => ({
    type: OPEN_CHAT_WINDOW, id: id, chatType: 'channel'
});

export default openChannel;