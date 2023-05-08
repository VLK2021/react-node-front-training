import React, {useEffect, useState} from 'react';


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(value => setUsers(value))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={'users'}>
            {
                users && users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default Users;