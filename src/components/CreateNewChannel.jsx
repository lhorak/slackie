/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {
    Component,
    PropTypes
} from 'react'

// import ChannelNameInput from './ChannelNameInput'
import Input from './Input'


class CreateNewChannel extends Component {

    render() {
        return (
            <div>
                <Input label="Name" description="Names should be lowercase with no spaces"/>
                <Input label="Purpose" isOptional={true} description="What's this channel about?"/>
            </div>
        );
    }

}

export default CreateNewChannel