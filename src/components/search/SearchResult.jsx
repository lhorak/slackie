import React, {
    Component,
    PropTypes,
} from 'react';

import moment from 'moment'

import Avatar from '../Avatar'

const SearchResult = props => {
    return (
        <div>
            <div>{props.targetType === 'channel' ? `#${props.targetName}` : `@${props.targetName}`}</div>
            <Avatar username={props.user}/>
            <div>{moment(props.timestamp).format('D.M. H:mm A')}</div>

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
SearchResult.defaultProps = {};

export default SearchResult;