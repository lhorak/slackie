import React from 'react'
import Radium from 'radium'

import AddButton from '../AddButton'
import PrivateMessagesList from './PrivateMessagesList'

const PrivateMessages = props => {
    return (
        <div style={styles.base}>
            <div style={styles.title}>
                DIRECT MESSAGES{props.directMessages.count() > 0 ? `(${props.directMessages.count()})` : ''}
                <AddButton action={props.onAddButtonClick && props.onAddButtonClick}/>
            </div>
            <PrivateMessagesList directMessages={props.directMessages}/>
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


export default Radium(PrivateMessages)