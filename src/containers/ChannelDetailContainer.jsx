import React from 'react'
import { connect } from 'react-redux'
import ChannelDetail from '../components/channels/ChannelDetail'

const mapStateToProps = (store) => {
    return {
        channels: store.channels
    };
};

const ChannelDetailContainer = connect(mapStateToProps)(ChannelDetail);

export default ChannelDetailContainer