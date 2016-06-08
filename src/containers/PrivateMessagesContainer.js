import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'

import createChannel from '../actions/createChannel'
import PrivateMessages from '../components/direct_messages/PrivateMessages'

const mapDispatchToProps = dispatch => {
    return {
        onAddButtonClick: name => {
            dispatch(createChannel('georgie'));
        }
    }
};

const mapStateToProps = store => {
    return {
        directMessages: store.directMessages
    }
};

const PrivateMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateMessages);

export default PrivateMessagesContainer
