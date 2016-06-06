/**
 * Created by pupa on 6/6/16.
 */

// NPM imports
import React, {
    Component,
    PropTypes
} from 'react'

import ChannelNameInput from './ChannelNameInput'


class CreateNewChannel extends Component {

    render() {
        return (
            <div>
                <ChannelNameInput />
            </div>
        );
    }

}

export default CreateNewChannel