import { List, Map } from 'immutable';
import { CREATE_CHANNEL, DELETE_CHANNEL } from '../ActionTypes'
import v4 from 'node-uuid';


const dummyUsers = List.of(
    Map({nick: 'georgie', id: v4()}),
    Map({nick: 'puffy', id: v4()}),
    Map({nick: 'lhorak', id: v4()}),
    Map({nick: 'admin', id: v4()})
);

function users(state = dummyUsers, action) {
    switch (action.type) {
        case 'CREATE_USER':

        default:
            return state;
    }
}

export default users;