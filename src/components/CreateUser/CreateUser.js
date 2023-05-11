import React from 'react';
import {useForm} from "react-hook-form";

import './CreateUserStyle.css';
import {userService} from "../../services";


const CreateUser = () => {
    const {register, handleSubmit, reset} = useForm();

    const submit = async (data) => {
        try {
            await userService.createUs(data)
                .then(response => {
                    if (response.data) {
                        alert('User was created!')
                    }
                })

            reset();
        } catch (e) {
            console.error(e.message);
        }

    }


    return (
        <div className={'createUser'}>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit(submit)} className={'form'}>
                <div className={'block'}><label>Name <input type="text" {...register('name')}/></label></div>
                <div className={'block'}><label>LastName <input type="text" {...register('lastName')}/></label></div>
                <div className={'block'}><label>Age <input type="number" {...register('age')}/></label></div>
                <div className={'block'}><label>City <input type="text" {...register('city')}/></label></div>
                <div className={'block'}><label>Phone <input type="text" {...register('phone')}/></label></div>
                <div className={'block'}><label>Email <input type="text" {...register('email')}/></label></div>
                <div className={'block'}><label>Password <input type="text" {...register('password')}/></label></div>

                <div className={'btn'}>
                    <button>create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;