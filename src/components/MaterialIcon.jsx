import React, { PropTypes } from 'react'
import Radium from 'radium'


const MaterialIcon = ({name, size, style, onClick}) => (
    <i style={{fontSize: size, ...style}}
       className="material-icons"
       onClick={onClick}
    >{name}</i>
);

MaterialIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string
}

MaterialIcon.defaultProps = {
    size: '1rem'
}

export default MaterialIcon