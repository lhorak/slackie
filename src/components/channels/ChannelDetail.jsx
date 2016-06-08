import React, {
    Component,
    PropTypes,
} from 'react';

import Radium from 'radium';
import MessageComposer from '../MessageComposer';

class ChannelDetail extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: ''
        }
    };


    onMessageInput = e => {
        if (e.target.value.replace(/ /g, '').length > 0) {
            this.setState({message: e.target.value});
        }
        else {
            this.setState({message: ''});
        }
    };


    sendMessage = () => {
        this.props.sendMessage(this.props.loggedUserId, this.props.openedChannel.get('id'), this.state.message);
        console.log(this.state.message);
        this.setState({message: ''});
    };


    render() {
        console.log(this.props);
        return (
            <div style={styles.base}>
                <span>{this.props.router}</span>
                <MessageComposer
                    message={this.state.message}
                    onChange={this.onMessageInput}
                    onSend={this.sendMessage}/>
            </div>
        );
    }
}

ChannelDetail.propTypes    = {};
ChannelDetail.defaultProps = {};

const styles = {
    base: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        background: '#fff',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    }
}

export default Radium(ChannelDetail);
