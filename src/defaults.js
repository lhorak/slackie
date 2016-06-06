import { List, Map } from 'immutable'
import { STATUS_OFFLINE } from './userStatus'

export const DEFAULT_CHANNELS = List.of(
    Map({name: 'general', messages: List()}),
    Map({name: 'random', messages: List()}),
    Map({name: 'gooddata', messages: List()}),
    Map({name: 'admins', messages: List()})
);

export const DEFAULT_LOGGED_USER = Map({
    name    : null,
    username: null,
    status  : STATUS_OFFLINE
});