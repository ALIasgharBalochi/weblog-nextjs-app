import {number, object,string} from 'yup';

export const createBlogSchema = object({
    title: string().required(),
    imageUrl: string().url().required(),
    content: string().required(),
    userSelector: string().required()
})


export const createUserSchema = object({
    photo: string().url().required(),
    fullname: string().required(),
    email: string().email().required(),
    password: string().required("password it is requaird")
})