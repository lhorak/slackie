import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'
import includes from 'lodash/includes'

import closeDirectMessage from '../actions/closeDirectMessage'
import DirectMessages from '../components/direct_messages/DirectMessages'

const mapDispatchToProps = dispatch => {
    return {
        onCloseDMClick: id => {
            dispatch(closeDirectMessage(id));
        }
    }
};

const mapStateToProps = store => {
    return {
        directMessages: store.users.filter(
            user => includes(store.directMessages.toJS(), user.get('id'))
        ).sortBy(
            user => user.get('username')
        ),
        openedChat    : store.openedChat,
        usersCount    : store.users.count()
    }
};

const DirectMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DirectMessages);

export default DirectMessagesContainer
