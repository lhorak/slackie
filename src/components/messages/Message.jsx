import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium'
import moment from 'moment'

import Avatar from '../Avatar'

const Message = ({username, timestamp, text, id, link}) => {
    return (
        <div style={styles.base}>
            <div style={styles.avatarContainer}>
                <Avatar username={username} link={link ? link : ''}/>
            </div>
            <div style={styles.contentContainer}>
                <div><span style={styles.username}>{username}</span><span
                    style={styles.date}>{moment(timestamp).format('D.M. H:mm A')}</span></div>
                <div style={styles.message}>{text.split('\n').map((paragraph, key) => (
                    <p key={key} style={styles.paragraph}>{paragraph}</p>))}</div>
            </div>

        </div>
    );
}

Message.propTypes    = {
    id       : PropTypes.string.isRequired,
    text     : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    timestamp: PropTypes.any.isRequired
};
Message.defaultProps = {};

const styles = {
    base            : {
        width    : '100%',
        padding  : '.5rem 1rem 1.1rem 1rem',
        position : 'relative',
        minHeight: '40px'
    },
    avatarContainer : {
        position: 'absolute',
        top     : '5px',
        left    : '10px',
        width   : '40px',
        height  : '40px'
    },
    contentContainer: {
        width      : '100%',
        paddingLeft: '50px'
    },
    username        : {
        fontSize   : '1rem',
        lineHeight : '1rem',
        fontWeight : '800',
        color      : '#2E2E2E',
        marginRight: '5px'
    },
    date            : {
        fontSize  : '.75rem',
        lineHeight: '1rem',
        fontWeight: '400',
        color     : '#6F6F6F'
    },
    message         : {
        marginTop: '.2rem',
        color    : '#2E2E2E'
    },
    paragraph       : {
        margin  : '0 0 .3rem 0',
        fontSize: '.9rem'
    }

}

export default Radium(Message);