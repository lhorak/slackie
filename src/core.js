import { Map, List } from 'immutable';

export const INITIAL_STATE = Map({
    channels  : List([
        Map({name: 'general', messages: List()}),
        Map({name: 'random', messages: List()}),
        Map({name: 'gooddata', messages: List()}),
        Map({name: 'admins', messages: List()})
    ]),
    users     : List([
        Map({nick: 'lhorak'}),
        Map({nick: 'johnny'})
    ]),
    openedChat: null
});