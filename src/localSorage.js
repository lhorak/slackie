import {fromJS} from 'immutable'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('slackieState');

        if (serializedState === null) {
            return undefined;
        }
        return fromJS(JSON.parse(serializedState)).toObject();
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('slackieState', serializedState);
    } catch (err) {
        console.error(err);
    }
}