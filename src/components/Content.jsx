import React, { PropTypes } from 'react'
import Radium from 'radium'

const Content = ({children}) => (
    <div style={styles}>
        {children}
    </div>
);

const styles = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginLeft    : '220px',
    marginTop     : '60px',
    overflow: 'hidden'
}


export default Radium(Content);