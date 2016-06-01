import React from 'react'

import UserListItem from './UserListItem'


export const UsersList = (props) => {
    const users = props.users.map((user) => {
        return <UserListItem name={user.nick}/>
    });

    return (
        <ul className="usersList">
            {users.length > 0 ? users : <div>Žádné PM</div>}
        </ul>
    );
}