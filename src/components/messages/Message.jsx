import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import moment from 'moment'

const Message = props => {
    return (
        <div>
            <span>{props.username} {moment(props.timestamp).format('D. MMM, h:mma')}</span>
            <span>{props.text}</span>
        </div>
    );
}

Message.propTypes    = {
    id       : PropTypes.string.isRequired,
    text     : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
};
Message.defaultProps = {};

export default Message;