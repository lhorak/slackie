import React, {
    PropTypes,
    Component
} from 'react';

import Radium from 'radium'
import Scrollbars from 'react-custom-scrollbars'
import Message from './Message'

class MessagesList extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        this.refs.scrollbar.scrollToBottom();
    }

    componentDidUpdate() {
        this.refs.scrollbar.scrollToBottom();
    }

    componentDidMount() {
        this.refs.scrollbar.scrollToBottom();
    }


    render() {
        return (
            <Scrollbars ref="scrollbar">
                <div style={styles.base}>
                    {this.props.messages.map((message) => (
                        <Message key={message.id} id={message.id} timestamp={message.timestamp}
                                 text={message.message} username={message.userId}/>))}
                </div>
            </Scrollbars>
        );
    }
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
        display  : 'block'
    }
}

export default Radium(MessagesList);