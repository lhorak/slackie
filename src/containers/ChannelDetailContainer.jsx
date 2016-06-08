import React from 'react'
import { connect } from 'react-redux'
import ChannelDetail from '../components/channels/ChannelDetail';
import sendChannelMessage from '../actions/sendChannelMessage';

const mapStateToProps = (store) => {
    return {
        channels     : store.channels,
        openedChannel: store.channels.all.get(store.openedChat),
        loggedUserId : store.loggedUser.get('username')
    };
};

const ChannelDetailContainer = connect(mapStateToProps, {sendMessage: sendChannelMessage})(ChannelDetail);

export default ChannelDetailContainer