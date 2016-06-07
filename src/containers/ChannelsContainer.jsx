import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'

import createChannel from '../actions/createChannel'
import Channels from '../components/channels/Channels'

const mapDispatchToProps = dispatch => {
    return {
        onAddButtonClick: name => {
            dispatch(createChannel('georgie'));
        }
    }
};

const mapStateToProps = store => {
    return {
        channels: store.channels
    }
};

const ChannelsContainer = connect(mapStateToProps, mapDispatchToProps)(Channels);

export default ChannelsContainer
