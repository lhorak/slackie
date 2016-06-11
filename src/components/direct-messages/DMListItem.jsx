import React, {
    Component,
    PropTypes,
} from 'react';

import Link from 'react-router/lib/Link'

import UserStatus from '../UserStatus'

const DMListItem = props => {
    const closeDM = () => props.onCloseClick(props.id);

    return (
        <li className={props.active ? 'sidebarLink active' : 'sidebarLink'} onClick={props.onClick}>
            <Link to={`/messages/${props.username}`}><UserStatus status={props.status}/>{props.username}</Link>
            <span className="sidebarLink__close" onClick={closeDM}>×</span>
        </li>
    );
}

DMListItem.propTypes    = {
    username: PropTypes.string.isRequired,
    status  : PropTypes.string.isRequired,
    id      : PropTypes.string.isRequired
};
DMListItem.defaultProps = {};

export default DMListItem;