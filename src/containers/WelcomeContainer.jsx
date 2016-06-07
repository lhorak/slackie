/**
 * Created by pupa on 6/7/16.
 */

// NPM imports
import React, {
    Component,
    PropTypes,
} from 'react';
import {connect} from 'react-redux'

class WelcomeContainer extends Component {
    render() {
        return (
            <div>Welcome {this.props.loggedUser.get('username')}</div>
        );
    }
}

WelcomeContainer.propTypes = {};
WelcomeContainer.defaultProps = {};


const mapStateToProps = state => {
    return {
        loggedUser: state.loggedUser
    }
}

export default connect(mapStateToProps)(WelcomeContainer);
