import React, {
    Component,
    PropTypes,
} from 'react';
import Radium from 'radium'

import AddButton from './AddButton'
import ChannelsList from './ChannelsList'

class Channels extends Component {
    render() {
        return (
            <div style={styles.base}>
                <div style={styles.title}>
                    CHANNELS({this.props.channels.count()}) <AddButton action={this.props.onAddButtonClick}/>
                </div>
                <ChannelsList channels={this.props.channels}/>
            </div>
        );
    }
}

Channels.propTypes    = {};
Channels.defaultProps = {};


const styles = {
    base : {
        padding: '10px 0'
    },
    title: {
        padding: '0 10px'
    }
};


export default Radium(Channels);
