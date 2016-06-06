import React from 'react'
import Radium from 'radium'

import AddButton from './AddButton'
import PrivateMessagesList from './PrivateMessagesList'

const PrivateMessages = props => {
    return (
        <div style={styles.base}>
            <div style={styles.title}>
                PRIVATE MESSAGES{props.privateMessages.count() > 0 ? `(${props.privateMessages.count()})` : ''}
                <AddButton action={props.onAddButtonClick && props.onAddButtonClick}/>
            </div>
            <PrivateMessagesList privateMessages={props.privateMessages}/>
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