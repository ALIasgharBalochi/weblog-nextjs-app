
'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { nanoid } from "@reduxjs/toolkit";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField } from "@mui/material";

import { toast  } from 'react-toastify';
import { useFormik } from "formik";


import { useAddNewUserMutation } from "../redux/weblogApi";
import { createUserSchema } from "../createBlog/yup/Yup";

import LoginLogo from '@/public/login.png'


const Rigestring = () => {
        const [userFullname,setUserFullname] = useState('');
        const [userAddereses,setUserAddereses] = useState('');

        const [addNewUser,{isLoading}] = useAddNewUserMutation();

        const router = useRouter();


        const createBlog = async (value) => {
                 try{
                  await addNewUser({
                    id: nanoid(),
                    subscribers: 0,
                    fullname: value.fullname,
                    photo: value.photo,
                  }).unwrap();
                  setUserAddereses(''),
                  setUserFullname(''),
                  toast.success('The user was created successfully')
                  router.push('/')
                 }catch (error) {
                   console.log('this is a error from-regestring:',error);
                 }
        }

        const formik = useFormik({
          initialValues: {
            fullname: userFullname,
            photo: userAddereses
          },
          validationSchema: createUserSchema,
          onSubmit: (value) => {
            createBlog(value)
          }
        })

    return(
        <div className=" bg-slate-200 w-full h-[90vh] overflow-x-hidden">
            <div className="flex items-center justify-center w-full">
                <h1 className=" text-2xl text-slate-600">creating User</h1>
            </div>
            <Grid container sx={{width: '100%',height: '90%'}} >
                <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                    <Image src={LoginLogo} width={400} height={400} />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{display: 'flex', justifyContent: 'center',alignItems:'center',padding: '1rem'}}>
                    <div>
                     <form onSubmit={formik.handleSubmit}>
                     <Grid container>
                      <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{padding: '.5rem'}}>
                       <TextField 
                      type="text" 
                       sx={{width:'100%'}} 
                       id="fullname" 
                       label="fullname"
                       name="fullname" 
                       variant="outlined"
                       value={formik.values?.fullname}
                       onChange={formik.handleChange}
                       error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                       helperText={
                        formik.touched.fullname? formik.errors.fullname
                        :null
                       } 
                       />
                      </Grid>
                      <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{padding: '.5rem'}}>
                       <TextField 
                       type="text" 
                       sx={{width: '100%'}} 
                       id="photo" 
                       name="photo"
                       label="photo address" 
                       variant="outlined"
                       value={formik.values?.photo}
                       onChange={formik.handleChange}
                       error={Boolean(formik.touched.photo && formik.errors.photo)}
                       helperText={
                        formik.touched.photo? formik.errors.photo
                        :null
                       } 
                        />
                      </Grid>
                     </Grid>
                      <button className="w-full p-2 m-1 bg-slate-300 rounded-md hover:shadow-xl active:shadow-none"
                      type="submit"
                      >
                      creating
                      </button>
                     </form>
                    </div>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Rigestring;