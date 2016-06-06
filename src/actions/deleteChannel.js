import { DELETE_CHANNEL } from '../ActionTypes';

const deleteChannel = name => ({
    type: DELETE_CHANNEL, name: name
});

export default deleteChannel;