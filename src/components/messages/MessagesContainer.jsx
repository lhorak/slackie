import React, {
    Component,
    PropTypes,
} from 'react';

import { connect } from 'react-redux'
import Radium from 'radium'

class MessagesContainer extends Component {
    render() {
        return (
            <div style={styles}>

            </div>
        );
    }
}

MessagesContainer.propTypes    = {};
MessagesContainer.defaultProps = {};

const mapStateToProps = store => {
    return {
        messages: store[store.openedChatType].get(store.openedChat).get('messages'),
        chatType: store.openedChatType,
        members : store[store.openedChatType].get(store.openedChat).get('members')
    }
}

const styles = {
    maxHeight: '100%',
    minWidth : '100%'
}

export default connect(mapStateToProps)(Radium(MessagesContainer));
