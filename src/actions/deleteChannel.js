import { DELETE_CHANNEL } from '../ActionTypes';

export function deleteChannel(name) {
    return {type: DELETE_CHANNEL, name: name}
}