import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'

import UserStatus from '../UserStatus'

const OpenedUserInfo = ({username, fullname, status}) => {
    return (
        <div>
            <div style={styles.row}>
                <span style={styles.username}>@{username}</span>
            </div>
            <div style={styles.row}>
                <UserStatus status={status}/>
                <span style={styles.status}>{status}</span>
                <span style={styles.fullname}> | {fullname}</span>
            </div>
        </div>
    );
}

OpenedUserInfo.propTypes    = {};
OpenedUserInfo.defaultProps = {};

const styles = {
    row     : {
        display   : 'inline-block',
        margin    : '0 0 5px 0',
        width     : '100%',
        lineHeight: '1.1rem'
    },
    username: {
        fontSize: '1.1rem',
        color   : 'rgb(44, 45, 48)'
    },
    status  : {
        fontSize  : '.8rem',
        fontWeight: '200',
        color     : 'rgb(151, 151, 151)',
        lineHeight: '1.1rem'
    },
    fullname: {
        fontSize  : '.8rem',
        fontWeight: '200',
        color     : 'rgb(151, 151, 151)',
        lineHeight: '1.1rem'
    }
}

export default Radium(OpenedUserInfo);