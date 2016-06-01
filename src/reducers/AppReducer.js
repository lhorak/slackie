import { combineReducers } from 'redux';
import channels from './Channels'
import { Map } from 'immutable'


const slackieApp = combineReducers({channels});

export default slackieApp;