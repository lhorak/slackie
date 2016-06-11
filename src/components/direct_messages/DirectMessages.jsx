import React from 'react'
import Radium from 'radium'

import DMList from './DMList'
import OpenNewDirectMessage from './OpenNewDirectMessage'
import { withRouter } from 'react-router'

const DirectMessages = props => {

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

const styles = {
    base : {
        padding: '10px 0'
    },
    title: {
        padding: '0 10px'
    }
};


export default withRouter(Radium(DirectMessages))