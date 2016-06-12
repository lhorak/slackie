import React from 'react'
import { connect } from 'react-redux'
import SlackieApp from './App'

const mapStateToProps = (store) => {
    return {
        channels: store.channels
    };
};

const AppContainer = connect(mapStateToProps)(SlackieApp);

export default AppContainer