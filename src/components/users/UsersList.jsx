import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import UsersListItem from './UsersListItem'

class UsersList extends Component {
    render() {
        return (
            <div style={styles.base}>
                <h1>Choose a person, who you want to chat with</h1>
                <Scrollbars>
                    <div style={styles.usersList}>
                        {this.props.users.toList().map(user => {
                            return <UsersListItem key={user.get('id')} user={user} click={this.props.onUserClick}/>
                        })}
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

UsersList.propTypes    = {};
UsersList.defaultProps = {};

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const styles = {
    base     : {
        display      : 'flex',
        flexDirection: 'column',
        padding      : 0,
        margin       : 0,
        height       : '100%'
    },
    usersList: {
        listStyle: 'none',
        padding  : 0,
        margin   : 0,
        height   : '100%',
        width    : '100%'
    }
}

export default connect(mapStateToProps)(Radium(UsersList));
