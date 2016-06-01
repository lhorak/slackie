import React from 'react'


export const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__title">
                CHANNELS
            </div>
            
            {props.children}
        </div>
    );
}