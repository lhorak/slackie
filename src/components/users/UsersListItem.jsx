import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import Link from 'react-router/lib/Link'

import Avatar from '../Avatar'
import UserStatus from '../UserStatus'

const UsersListItem = ({user, click}) => {
    return (
        <Link style={styles.base} to={`/messages/${user.get('username')}`} onClick={click}>
            <div style={styles.avatarContainer}>
                <Avatar style={{display: 'inline-block'}} link={user.get('avatar')} username={user.get('username')}/>
            </div>
            <div style={styles.userInfo}>
                <span style={styles.username}>{user.get('username')}</span>
                <UserStatus status={user.get('status')}/>
                <span style={styles.fullname}>{user.get('fullname')}</span>
            </div>
        </Link>
    );
}

UsersListItem.propTypes    = {};
UsersListItem.defaultProps = {};

const styles = {
    base           : {
        borderBottom  : '1px solid #EEEEEE',
        padding       : '15px 0',
        position      : 'relative',
        textDecoration: 'none',
        display       : 'block'
    },
    userInfo       : {
        display   : 'block',
        marginLeft: '50px',
        width     : '100%',
        minHeight : '40px'
    },
    avatarContainer: {
        position: 'absolute',
        top     : '15px',
        left    : 0,
        width   : '40px',
        height  : '40px'
    },
    username       : {
        fontSize      : '1rem',
        fontWeight    : 800,
        marginRight   : '10px',
        color         : 'rgb(44, 45, 48)',
        textDecoration: 'none'
    },
    fullname       : {
        color     : '#979797',
        fontSize  : '.8rem',
        fontWeight: 200
    }
}

export default Radium(UsersListItem);