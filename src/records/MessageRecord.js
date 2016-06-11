import { Record } from 'immutable'

const MessageRecord = Record({
    id       : undefined,
    timestamp: new Date().getTime(),
    message  : '',
    userId   : undefined
});


export default MessageRecord;