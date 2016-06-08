import { List, Map } from 'immutable';
import { CREATE_CHANNEL, OPEN_CHANNEL } from '../../ActionTypes'

const opened = (state = List(), action) => {
    switch (action.type) {
        case CREATE_CHANNEL:
            return state.push(action.id);
        case OPEN_CHANNEL:
            if (state.includes(action.id)) {
                return state;
            }
            else {
                return state.push(action.id);
            }
        default:
            return state;
    }
};

export default opened;