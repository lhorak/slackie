import React, {
    Component,
    PropTypes,
} from 'react';

const OpenedChannelInfo = ({name, purpose}) => {
    return (
        <div>
            <div style={styles.row}>
                <span style={styles.name}>#{name}</span>
            </div>
            <div style={styles.row}>
                <span style={styles.purpose}>{purpose}</span>
            </div>
        </div>
    );
}

OpenedChannelInfo.propTypes    = {};
OpenedChannelInfo.defaultProps = {};

const styles = {
    row    : {
        display   : 'inline-block',
        margin    : '0 0 5px 0',
        width     : '100%',
        lineHeight: '1.1rem'
    },
    name   : {
        fontSize: '1.1rem',
        color   : 'rgb(44, 45, 48)'
    },
    purpose: {
        fontSize  : '.8rem',
        fontWeight: '200',
        lineHeight: '1.1rem',
        color     : 'rgb(151, 151, 151)'
    }
}

export default OpenedChannelInfo;