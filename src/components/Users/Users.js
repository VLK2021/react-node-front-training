import React, {useEffect, useState} from 'react';

import {userService} from "../../services";


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
                users && users.map(user => <div key={user.id}>{user.name}-{user.email}</div>)
            }
        </div>
    );
};

export default Users;