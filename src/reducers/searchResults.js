import { List, Map, Record, fromJS } from 'immutable';
import v4 from 'node-uuid';
import dummyUsers from '../../dummy_data/users'
import { SEND_DIRECT_MESSAGE } from '../ActionTypes'
import MessageRecord from '../records/MessageRecord'

import { searchMessages } from '../components/app/Root'

function searchResults(state = List(), action) {
    switch (action.type) {
        case 'SEARCH_TERM':
            return searchMessages(action.term);
        case 'CLEAR_SEARCH_RESULTS':
            return [];
        default:
            return state;
    }
}

export default searchResults;

//
// export const UserRecord = new Record({
//     id: undefined,
//     username: undefined,
//     fullname: undefined,
//     avatar: undefined,
//     status: 'offline',
//     messages: List()
// });