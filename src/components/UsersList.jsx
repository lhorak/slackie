import React from 'react'
import UserListItem from './UserListItem'


const UsersList = props => {
    return (
        <div>
            <div className="sidebar__title">
                PRIVATE MESSAGES
            </div>
            <ul className="usersList">
                {props.users.map((user, i) => {
                    return <UserListItem name={user.get('nick')} key={i}/>
                })}
            </ul>
        </div>

    );
};


export default UsersList;