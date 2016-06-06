export const loadState = () => {
    try {
        const serializedState = loaclStorage.getItem('slackieState');

        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
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