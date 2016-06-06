import React, { PropTypes } from 'react'
import Radium from 'radium'

const Content = ({children}) => (
    <div style={styles}>
        {children}
    </div>
);

const styles = {
    width         : '100%',
    height        : '100%',
    marginLeft    : '220px',
    marginTop     : '60px',
    padding       : '0 20px',
    display       : 'flex',
    justifyContent: 'flex-end'
}


export default Radium(Content);