/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {Component, PropTypes} from 'react'
import Radium from 'radium';
// import ChannelNameInput from './ChannelNameInput'
import Input from '../Input'
import Button from '../Button'

class NewChannelForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            channelName: '',
            channelPurpose: ''
        }
    };

    onChannelNameInput = (ev) => {
        this.setState({channelName:  ev.target.value.toLowerCase().replace(/ /g,'')});
    };

    onChannelPurposeInput = (ev) => {
        this.setState({channelPurpose:  ev.target.value});
    };

    submitForm = () => this.props.onSubmit(this.state.channelName, this.state.channelPurpose);
    
    
    render() {
        return (
            <div style={styles.base}>
                <div>
                    <h1 style={styles.header}>Create a public channel</h1>
                    <p style={styles.description}>Channels are where your team communicates. They're best when organized around a topic - #leads, for example.</p>
                </div>
                <Input
                    label="Name"
                    description="Names should be lowercase with no spaces"
                    placeholder="e.g. leads"
                    onChange={this.onChannelNameInput}
                    value={this.state.channelName}
                    onEnterKey={this.submitForm}/>
                <Input label="Purpose" isOptional={true} description="What's this channel about?" onChange={this.onChannelPurposeInput} value={this.state.channelPurpose} />
                <div>
                    <Button text="Create channel" onClick={this.submitForm} />
                </div>
            </div>
        )
    }
};

const styles = {
    base: {
        textAlign: 'left'
    },
    header: {
        fontSize: '2.5rem',
        textAlign: 'left',
        color: '#2c2d30'
    },
    description: {
        fontSize: '.9rem',
        lineHeight: '1.2',
        textAlign: 'left',
        color: '#9e9ea6'
    }
};

export default Radium(NewChannelForm);