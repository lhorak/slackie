import React, {
    Component,
    PropTypes,
} from 'react';

import { connect } from 'react-redux'
import sendChannelMessage from '../actions/sendChannelMessage';
import openChannel from '../actions/openChannel'
import browserHistory from 'react-router/lib/browserHistory';


import Radium from 'radium';
import MessageComposer from '../components/MessageComposer';

class ChannelDetail extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: ''
        }
    };


    onMessageInput = e => {
        if (e.target.value.replace(/ /g, '').length > 0) {
            this.setState({message: e.target.value});
        }
        else {
            this.setState({message: ''});
        }
    };


    sendMessage = () => {
        console.log('sending message to:', this.props.loggedUserId, this.props.openedChannel, this.state.message);
        this.props.sendMessage(this.props.loggedUserId, this.props.openedChannel, this.state.message);
        this.setState({message: ''});
    };


    render() {
        console.log(this.props);
        return (
            <div style={styles.base}>
                <span>{this.props.router}</span>
                <MessageComposer
                    message={this.state.message}
                    onChange={this.onMessageInput}
                    onSend={this.sendMessage}/>
            </div>
        );
    }
}

ChannelDetail.propTypes    = {};
ChannelDetail.defaultProps = {};

const styles = {
    base: {
        display       : 'flex',
        minWidth      : '100%',
        minHeight     : '100%',
        background    : '#fff',
        justifyContent: 'flex-end',
        flexDirection : 'column'
    }
}

const mapStateToProps = (store) => {
    return {
        channels     : store.channels,
        openedChannel: store.openedChat.id,
        loggedUserId : store.loggedUser.get('username'),
        messages     : store.channels.get(store.openedChat.id).get('messages')
    };
};

const mapDispatchToProps = {sendMessage: sendChannelMessage, setOpenedChat: openChannel};

const ChannelDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Radium(ChannelDetail));

export default ChannelDetailContainer