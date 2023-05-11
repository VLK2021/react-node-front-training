import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services";
import './SingleUserStyle.css';
import {useForm} from "react-hook-form";


const SingleUser = () => {
    const [visible, setVisible] = useState(true);
    const {register, handleSubmit, reset} = useForm();

    const location = useLocation();
    const {user} = location.state;
    const {id, name, email, city} = user;

    const deleteUser = async () => {
        // await fetch(`http://localhost:5000/users/${id}`, {method:'DELETE'})
        await userService.deleteUser(id);
    }

    const submit = async (data) => {
        const {email, password, city} = data;
        await userService.updateUser(id, {email, password, city});
        reset();
    }


    return (
        <div className={'singleUser'}>
            <div className={'singleUser-inf'}>{id}) {name} {email} {city}</div>

            {visible &&
            <div className={'popApp'}>
                <h1>update user</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <label>Email<input type="text" {...register('email')}/></label>
                    <label>Password<input type="text" {...register('password')}/></label>
                    <label>City<input type="text" {...register('city')}/></label>

                    <div className={'btn'}>
                        <button>update user</button>
                    </div>
                </form>

            </div>
            }

            <button onClick={deleteUser}>delete from sql</button>
            <button onClick={() => setVisible(!visible)}>update user in sql</button>
        </div>
    );
};

export default SingleUser;