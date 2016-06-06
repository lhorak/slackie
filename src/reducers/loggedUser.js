import { SET_USER_STATUS } from '../ActionTypes'
import { DEFAULT_LOGGED_USER } from '../defaults'

const loggedUser = (state = DEFAULT_LOGGED_USER, action) => {
    switch (action.type) {
        case SET_USER_STATUS:
            return state.set('status', action.status);
        default:
            return state;
    }
};

export default loggedUser;