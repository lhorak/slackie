import { List, Map } from 'immutable';
import { CREATE_CHANNEL, DELETE_CHANNEL } from '../ActionTypes'
import { DEFAULT_CHANNELS } from '../defaults'

const channels = (state = DEFAULT_CHANNELS, action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            const channel = Map({name: action.name, purpose: action.purpose, messages: List()});
            return state.push(channel);
        case DELETE_CHANNEL:
            return state.delete(action.name);
        default:
            return state;
    }
};

export default channels;