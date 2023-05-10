import React from 'react';
import {NavLink} from "react-router-dom";


const User = ({user}) => {
    const {name, email, id} = user;


    return (
        <div>
            <NavLink to={`${id}`} state={{user}}>
                {name} - {email}
            </NavLink>
        </div>
    );
};

export default User;