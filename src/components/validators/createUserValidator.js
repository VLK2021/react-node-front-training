import Joi from 'joi';


const createUserValidator = Joi.object({

    name: Joi.string().required().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).message({
        'string.pattern.base': 'Тільки букви від 1 до 20 символів'
    }),
    lastName: Joi.string().required().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).message({
        'string.pattern.base': 'Тільки букви від 1 до 20 символів'
    }),
    age: Joi.number().required().min(1).max(100).message({
        'number.min': 'Age is not valid!'
    }),
    city: Joi.string().required().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).message({
        'string.pattern.base': 'Тільки букви від 1 до 20 символів'
    }),
    phone: Joi.string().required().pattern(/^\+[1-9]\d{1,14}$/).message({
        'string.pattern.base': 'Неправильний формат номеру телефону'
    }),
    // email: Joi.string().email().required().message({
    //     'string.email': 'Неверный формат адреса электронной почты'
    // }),
    // password: Joi.string().min(8).max(30).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required().message({
    //     'string.min': 'Пароль повинен містити не менше 8 символів',
    //     'string.max': 'Пароль не помвинен містити більше 30 символів',
    //     'string.pattern.base': 'Пароль повинен містити хоча б обну велику літеру одну малу та одну цифру'
    // }),

})

export {createUserValidator};