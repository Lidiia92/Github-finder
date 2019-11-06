import React, { Component } from 'react';

import UserItem from './UserItem';
import Spinner from '../Spinner';

const Users = (props) => {

    if(props.loading) {
        return <Spinner />
    } else {
        return (
            <div style={usersStyle}>
                {props.users.map(user =>{
                    return <UserItem key={user.id} user={user}/> 
                })}
            </div>
        )
    }

}

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
