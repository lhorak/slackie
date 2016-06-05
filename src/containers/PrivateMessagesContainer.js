import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'

import createChannel from '../actions/createChannel'
import PrivateMessages from '../components/PrivateMessages'

const mapDispatchToProps = dispatch => {
    return {
        onAddButtonClick: name => {
            dispatch(createChannel('georgie'));
        }
    }
};

const mapStateToProps = store => {
    return {
        privateMessages: store.privateMessages
    }
};

const PrivateMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateMessages);

export default PrivateMessagesContainer
