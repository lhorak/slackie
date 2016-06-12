import { CREATE_CHANNEL } from '../ActionTypes';
import v4 from 'node-uuid'

const createChannel = (name, purpose) => {
    

    return {
        type   : CREATE_CHANNEL,
        name   : name,
        purpose: purpose
    };
}

export default createChannel;