import React from 'react';

import {useLocation} from "react-router-dom";
import {userService} from "../../services";


const SingleUser = () => {
    const location = useLocation();
    const {user} = location.state;
    const {id, name} = user;

    const deleteUser = async () => {
        // await fetch(`http://localhost:5000/users/${id}`, {method:'DELETE'})
        await userService.deleteUser(id);
    }


    return (
        <div className={'singleUser'}>
            <div>{id}) {name}</div>

            <button onClick={deleteUser}>delete from sql</button>
        </div>
    );
};

export default SingleUser;