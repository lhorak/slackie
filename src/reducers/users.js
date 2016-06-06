import { List, Map } from 'immutable';
import { CREATE_CHANNEL, DELETE_CHANNEL } from '../ActionTypes'

const dummyUsers = List.of(
    Map({nick: 'georgie', messages: List()}),
    Map({nick: 'puffy', messages: List()}),
    Map({nick: 'lhorak', messages: List()}),
    Map({nick: 'admin', messages: List()})
);

function users(state = dummyUsers, action) {
    switch (action.type) {
        case 'CREATE_USER':

        default:
            return state;
    }
}

export default users;