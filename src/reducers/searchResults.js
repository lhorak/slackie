import { List } from 'immutable';

import { searchMessages } from '../components/app/Root'

/**
 * searchResults reducer
 * @param state
 * @param action
 * @returns {*}
 */
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