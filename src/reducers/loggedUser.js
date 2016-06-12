import { SET_USER_STATUS } from '../ActionTypes'
import { Map } from 'immutable';

/**
 * default logged user. this is just mock data
 * for presentational purposes
 * @type {*|Map<K, V>|Map<string, V>}
 */
export const defaultUser = Map({
    id      : "148896f7-9e80-4f88-9489-533718f4d7f2",
    fullname: "Lukas Horak",
    username: "lhorak",
    avatar  : "https://robohash.org/6KF.png?size=40x40&set=set2",
    status  : "online"
});

/**
 * loggedUser reducer.
 * For now it has only one action for switching user status, but
 * the action is note used across the app
 * @param state
 * @param action
 * @returns {*}
 *
 * @TODO: Finish user status changing on frontend
 */
const loggedUser = (state = defaultUser, action) => {
    switch (action.type) {
        case SET_USER_STATUS:
            return state.set('status', action.status);
        default:
            return state;
    }
};

export default loggedUser;