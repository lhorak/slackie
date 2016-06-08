import { List, Map } from 'immutable'
import { STATUS_OFFLINE, STATUS_ONLINE } from './userStatus'
import v4 from 'node-uuid'

export const DEFAULT_CHANNELS = Map({
    'general' : Map({name: 'general', id: v4()}),
    'random'  : Map({name: 'random', id: v4()}),
    'godddata': Map({name: 'gooddata', id: v4()})
});

export const DEFAULT_LOGGED_USER = Map({
    name    : 'John Doe',
    username: 'johndoe',
    status  : STATUS_ONLINE
});