import { CREATE_CHANNEL } from '../ActionTypes';

const createChannel = (name, purpose) => {
    

    return {
        type: CREATE_CHANNEL,
        name: name,
        purpose: purpose
    };
}

export default createChannel;