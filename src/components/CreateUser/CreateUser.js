import React from 'react';
import {useForm} from "react-hook-form";

import './CreateUserStyle.css';
import {userService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {createUserValidator} from "../validators/createUserValidator";


const CreateUser = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode:'onTouched',
        resolver: joiResolver(createUserValidator)
    });

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
                {errors.name && <span>{errors.name.message}</span>}
                <div className={'block'}><label>LastName <input type="text" {...register('lastName')}/></label></div>
                {errors.lastName && <span>{errors.lastName.message}</span>}
                <div className={'block'}><label>Age <input type="number" {...register('age')}/></label></div>
                {errors.age && <span>{errors.age.message}</span>}
                <div className={'block'}><label>City <input type="text" {...register('city')}/></label></div>
                {errors.city && <span>{errors.city.message}</span>}
                <div className={'block'}><label>Phone <input type="text" {...register('phone')}/></label></div>
                {errors.phone && <span>{errors.phone.message}</span>}
                <div className={'block'}><label>Email <input type="text" {...register('email')}/></label></div>
                {errors.email && <span>{errors.email.message}</span>}
                <div className={'block'}><label>Password <input type="text" {...register('password')}/></label></div>

                <div className={'btn'}>
                    <button>create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;