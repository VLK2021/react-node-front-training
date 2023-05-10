import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import './UsersStyle.css';
import User from "../User/User";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className={'users'}>
            {
                users && users.map(user => <User
                    key={user.id}
                    user={user}
                />)
            }
        </div>
    );
};

export default Users;