import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'

import DMListItem from './DMListItem'

const DMList = props => {
    return (
        <ul style={styles.base}>
            {props.directMessages.count() > 0 && props.directMessages.toList().map(
                user => <DMListItem key={user.get('id')}
                                    username={user.get('username')}
                                    id={user.get('id')}
                                    status={user.get('status')}
                                    active={user.get('id') === props.openedChatId} onCloseClick={props.onCloseClick}/>
            )}
        </ul>
    );
};

const styles = {
    base: {
        listStyle: 'none',
        padding  : 0
    }
}

export default Radium(DMList);