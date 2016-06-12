// NPM imports
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/app/Root'

// Get main app container from DOM
const appContainer = document.getElementById('slackie');

ReactDOM.render(
    <Root />,
    appContainer
);
