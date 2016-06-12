import { OPEN_DIRECT_MESSAGE } from '../ActionTypes';

const openDirectMessage = id => ({
    type: OPEN_DIRECT_MESSAGE, id: id, chatType: 'directMessage'
});

export default openDirectMessage;