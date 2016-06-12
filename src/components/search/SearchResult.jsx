import React, {
    Component,
    PropTypes,
} from 'react';
import Message from '../messages/Message'
import Radium from 'radium'

const SearchResult = props => {
    return (
        <div style={styles.base}>
            <div
                style={styles.targetContainer}>{props.targetType === 'channel' ? `#${props.targetName}` : `@${props.targetName}`}</div>
            <Message id={props.message}
                     text={props.message}
                     username={props.user}
                     timestamp={props.timestamp}/>
        </div>
    );
}

SearchResult.propTypes    = {
    message   : PropTypes.string,
    timestamp : PropTypes.number,
    user      : PropTypes.string,
    targetType: PropTypes.oneOf(['channel', 'directMessage']),
    targetName: PropTypes.string
};

const styles = {
    base           : {
        borderBottom: '1px solid #EAEAEA',
        padding     : '10px 0',
        margin      : '0 5px'
    },
    targetContainer: {
        width     : '100%',
        fontSize  : '.9rem',
        fontWeight: '600',
        padding   : '5px 15px',
        color     : 'rgb(14, 66, 80)' +
        ''
    }
}

export default Radium(SearchResult);