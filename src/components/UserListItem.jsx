import React from 'react';


const UserListItem = (props) => {

    return (
        <li className="userListItem">
            {props.name !== undefined ? props.name : 'undefined user'}
        </li>
    );
}


export default UserListItem;