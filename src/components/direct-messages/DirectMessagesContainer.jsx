import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import includes from 'lodash/includes'

import closeDirectMessage from '../../actions/closeDirectMessage'

import DMList from './DMList'
import OpenNewDirectMessage from './OpenNewDirectMessage'
import { withRouter } from 'react-router'

const DirectMessagesContainer = props => {

    const closeDM = (id) => {
        if (props.openedChat.id === id) {
            props.router.push('/');
        }
        props.onCloseDMClick(id);
    }


    return (
        <div style={styles.base}>
            <div style={styles.title}>
                DIRECT MESSAGES {props.usersCount > 0 ? `(${props.usersCount})` : ''}
                <OpenNewDirectMessage />
            </div>
            <DMList directMessages={props.directMessages}
                    openedChatId={props.openedChat && props.openedChat.id}
                    onCloseClick={closeDM}/>
        </div>
    )
}

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

const styles = {
    base : {
        padding: '10px 0'
    },
    title: {
        padding: '0 10px'
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Radium(DirectMessagesContainer)));