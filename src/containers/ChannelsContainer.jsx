import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import createChannel from '../actions/createChannel'
import Channels from '../components/channels/Channels'

const mapStateToProps = store => {
    return {
        channels    : store.channels,
        openedChatId: store.openedChat
    }
};

const ChannelsContainer = withRouter(connect(mapStateToProps)(Channels));

export default ChannelsContainer
