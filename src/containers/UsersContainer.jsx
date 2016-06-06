import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux'

import UsersList from '../components/UsersList'

const mapDispatchToProps = dispatch => {
    return {}
};

const mapStateToProps = store => {
    return {
        users: store.users
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersContainer
