import { SEND_DIRECT_MESSAGE } from '../ActionTypes';

const sendChannelMessage = (userId, message) => ({
    type   : SEND_DIRECT_MESSAGE,
    id     : userId,
    message: message
});

export default sendDirectMessage;
