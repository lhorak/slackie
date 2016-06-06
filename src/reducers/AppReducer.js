import { combineReducers } from 'redux';
import channels from './channels'
import users from './users'
import loggedUser from './loggedUser'
import privateMessages from './privateMessages'


const reducers = combineReducers({loggedUser, channels, privateMessages, users});

export default reducers;