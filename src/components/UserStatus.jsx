import React, {
    Component,
    PropTypes,
} from 'react';

require('../styles/userStatus.scss');

const UserStatus = ({status}) => {
    return (
        <i className={`userStatus ${status}`}></i>
    );
}

UserStatus.propTypes    = {
    status: PropTypes.oneOf(['online', 'offline', 'away'])
};
UserStatus.defaultProps = {};

export default UserStatus;