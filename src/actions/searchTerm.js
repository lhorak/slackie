import { OPEN_CHAT_WINDOW, CLOSE_DIRECT_MESSAGE } from '../ActionTypes';

const searchTerm = (term, results) => ({
    type   : 'SEARCH_TERM',
    term   : term,
    results: results
});

export default searchTerm;