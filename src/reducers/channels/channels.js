import { Record, List, Map } from 'immutable';
import { CREATE_CHANNEL, SEND_CHANNEL_MESSAGE } from '../../ActionTypes'

const channels = (state = Map(), action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            const channel = new Channel({
                name   : action.name,
                purpose: action.purpose
            });
            // const channel = Map({name: action.name, purpose: action.purpose, messages: List()});
            return state.set(action.name, channel);
        case SEND_CHANNEL_MESSAGE:
            const newMessage = Map({
                userId   : action.userId,
                timestamp: new Date(),
                message  : action.message
            });
            return state.updateIn([action.channelId, 'messages'], List(), (messages) => messages.push(newMessage));
        default:
            return state;
    }
};

export default channels;

export const getChannelMessages = (state, channelId) => {
    return state.get(channelId).get('messages');
};


export const Channel = new Record({
    name       : undefined,
    purpose    : '',
    dateCreated: new Date(),
    messages   : new Map(),
    members    : new Set()
})