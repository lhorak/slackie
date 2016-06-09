import { SEND_CHANNEL_MESSAGE } from '../ActionTypes';

const sendChannelMessage = (userId, channelName, message) => ({
    type     : SEND_CHANNEL_MESSAGE,
    userId   : userId,
    message  : message,
    channelId: channelName
});

export default sendChannelMessage;