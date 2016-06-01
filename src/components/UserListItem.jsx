import React from 'react'


export const UserListItem = (props) => {

    return (
        <li className="userListItem">{props.name !== undefined ? props.name : 'undefined user'}</li>
    );
}