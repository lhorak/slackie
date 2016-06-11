import { Record, List, Set } from 'immutable'

const ChannelRecord = Record({
    name       : undefined,
    purpose    : '',
    dateCreated: new Date().getTime(),
    messages   : new List(),
    members    : new Set()
});

export default ChannelRecord