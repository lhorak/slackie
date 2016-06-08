import { List, Map } from 'immutable';
import { CREATE_CHANNEL, DELETE_CHANNEL } from '../../ActionTypes'

const all = (state = Map(), action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            const channel = Map({name: action.name, purpose: action.purpose, id: action.id});
            return state.set(action.id, channel);
        case DELETE_CHANNEL:
            return state.delete(action.id);
        default:
            return state;
    }
};

export default all;