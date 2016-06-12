import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium';
import { connect } from 'react-redux'

import MessagesList from '../messages/MessagesList';
import MessageComposer from '../MessageComposer';

// Redux actions import
import sendDirectMessage from '../../actions/sendDirectMessage'
import openDirectMessage from '../../actions/openDirectMessage'

class DirectMessageDetail extends Component {
    onMessageInput = e => {
        this.setState({message: e.target.value});
    };


    sendMessage = (message) => {
        this.props.sendMessage(this.props.loggedUser.get('username'), this.props.openedChat, message);
    };

    render() {
        return (
            <div style={styles.base}>
                <div style={styles.messages}>
                    <MessagesList messages={this.props.messages}/>
                </div>
                <div style={styles.input}>
                    <MessageComposer
                        message={this.state.message}
                        onChange={this.onMessageInput}
                        onSend={this.sendMessage}/>
                </div>
            </div>
        );
    }
}

DirectMessageDetail.propTypes    = {};
DirectMessageDetail.defaultProps = {};

const styles = {
    base    : {
        position  : 'relative',
        width     : '100%',
        height    : '100%',
        top       : 0, left: 0, right: 0, bottom: 0,
        background: '#fff'
    },
    messages: {
        position: 'absolute',
        top     : 0,
        bottom  : '60px',
        left    : 0,
        right   : 0
    },
    input   : {
        position: 'absolute',
        bottom  : 0,
        left    : 0,
        right   : 0
    }
};

const mapStateToProps = (store) => {
    return {
        openedChat: store.openedChat ? store.openedChat.id : null,
        loggedUser: store.loggedUser,
        messages  : store.users.get(store.openedChat.id).get('messages').toJS()
    };
};

const mapDispatchToProps = {sendMessage: sendDirectMessage, setOpenedChat: openDirectMessage};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(DirectMessageDetail));
