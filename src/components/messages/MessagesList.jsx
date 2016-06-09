import React, {
    PropTypes,
} from 'react';

import Radium from 'radium'
import Scrollbars from 'react-custom-scrollbars'
import Message from './Message'

const MessagesList = ({messages}) => {
    return (
        <div style={styles.base}>
            <Scrollbars>
                {messages.map((message, key) => {
                    <Message key={message.key} id={message.timestamp} timestamp={message.timestamp}
                             text={message.message} username={message.username}/>
                })}
            </Scrollbars>
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
        minHeight: '100%'
    }
}

export default Radium(MessagesList);