import { List, Map } from 'immutable';
import { CREATE_CHANNEL, DELETE_CHANNEL } from '../ActionTypes'

const defaultChannels = Map(
    {
        'random'  : Map({messages: List()}),
        'general' : Map({messages: List()}),
        'projectx': Map({messages: List()})
    }
)

function channels(state = defaultChannels, action) {
    switch (action.type) {
        case CREATE_CHANNEL:
            const channel = Map({messages: List()});
            return state.set(action.name, channel);
        case DELETE_CHANNEL:
            return state.delete(action.name);
        default:
            return state;
    }
}

export default channels;