/**
 * Created by pupa on 6/7/16.
 */

// NPM imports
import React, {
    Component,
    PropTypes,
} from 'react';
import {connect} from 'react-redux'
import UsersList from '../components/users/UsersList';

class WelcomeContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.loggedUser.get('username')}</h1>
            </div>
        );
    }
}

WelcomeContainer.propTypes = {};
WelcomeContainer.defaultProps = {};


const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser,
        users     : state.users
    }
}

export default connect(mapStateToProps)(WelcomeContainer);
