import { CREATE_CHANNEL } from '../ActionTypes';

const createChannel = name => ({
    type: CREATE_CHANNEL, name: name
});

export default createChannel;