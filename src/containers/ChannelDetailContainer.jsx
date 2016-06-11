import React, {
    Component,
    PropTypes,
} from 'react';

import { connect } from 'react-redux'
import sendChannelMessage from '../actions/sendChannelMessage';
import openChannel from '../actions/openChannel'
import MessagesList from '../components/messages/MessagesList';


import Radium from 'radium';
import MessageComposer from '../components/MessageComposer';
import { Scrollbars } from 'react-custom-scrollbars';

class ChannelDetail extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: ''
        }
    };


    onMessageInput = e => {
        this.setState({message: e.target.value});
    };


    sendMessage = (message) => {
        this.props.sendMessage(this.props.loggedUser.get('username'), this.props.openedChannel, message);
        this.setState({message: ''});
    };


    render() {
        const messages = this.props.messages.toJS();


        return (
            <div style={styles.base}>
                <div style={styles.messages}>
                    <MessagesList messages={messages}/>
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

ChannelDetail.propTypes    = {};
ChannelDetail.defaultProps = {};

const styles = {
    base: {
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
    input: {
        position: 'absolute',
        bottom  : 0,
        left    : 0,
        right   : 0
    }
};

const mapStateToProps = (store) => {
    return {
        channel      : store.channels.get(store.openedChat.id),
        openedChannel: store.openedChat.id,
        loggedUser   : store.loggedUser,
        messages     : store.channels.get(store.openedChat.id).get('messages')
    };
};

const mapDispatchToProps = {sendMessage: sendChannelMessage, setOpenedChat: openChannel};

const ChannelDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Radium(ChannelDetail));

export default ChannelDetailContainer