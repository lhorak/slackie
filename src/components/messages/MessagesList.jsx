import React, {
    PropTypes,
} from 'react';

import Radium from 'radium'
import Scrollbars from 'react-custom-scrollbars'
import Message from './Message'

const MessagesList = ({messages}) => {
    return (
        <div style={styles.base}>
            {messages.map((message, key) => (
                <Message key={message.timestamp} id={message.timestamp} timestamp={message.timestamp}
                         text={message.message} username={message.userId}/>))}
        </div>
    );
};

MessagesList.propTypes    = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired
};
MessagesList.defaultProps = {
    messages: []
};

const styles = {
    base: {
        width    : '100%',
        height   : '100%',
        minHeight: '100%',
        display: 'block',
        background: 'green'
    }
}

export default Radium(MessagesList);