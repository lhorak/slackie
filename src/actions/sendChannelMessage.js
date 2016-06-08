import { SEND_CHANNEL_MESSAGE } from '../ActionTypes';

const sendChannelMessage = (userId, message, channelId) => ({
    type    : SEND_CHANNEL_MESSAGE,
    id      : channelId,
    message : message,
    targetId: channelId
});

export default sendChannelMessage;