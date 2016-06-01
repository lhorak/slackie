import { CREATE_CHANNEL } from '../ActionTypes';

export function createChannel(name) {
    return {type: CREATE_CHANNEL, name: name}
}