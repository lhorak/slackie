import { combineReducers } from 'redux';
import channels from './ChannelsReducer'
import { Map } from 'immutable'


const slackieApp = combineReducers({channels});

export default slackieApp;