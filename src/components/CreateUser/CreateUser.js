import React from 'react';
import {useForm} from "react-hook-form";

import './CreateUserStyle.css';
import {userService} from "../../services";


const CreateUser = () => {
    const {register, handleSubmit, reset} = useForm();

    const submit = async (data) => {
        await userService.createUs(data)
        reset();
    }


    return (
        <div className={'createUser'}>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name: <input type="text" {...register('name')}/></label>
                <label>LastName: <input type="text" {...register('lastName')}/></label>
                <label>Age: <input type="number" {...register('age')}/></label>
                <label>City: <input type="text" {...register('city')}/></label>
                <label>Phone: <input type="text" {...register('phone')}/></label>
                <label>Email: <input type="text" {...register('email')}/></label>
                <label>Password: <input type="text" {...register('password')}/></label>

                <div>
                    <button>create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;