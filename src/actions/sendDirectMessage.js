import { SEND_DIRECT_MESSAGE } from '../ActionTypes';

const sendDirectMessage = (loggedUserId, userId, message) => ({
    type        : SEND_DIRECT_MESSAGE,
    loggedUserId: loggedUserId,
    userId      : userId,
    message     : message
});

export default sendDirectMessage;
