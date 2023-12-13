
'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { nanoid } from "@reduxjs/toolkit";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Divider } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";

import { toast } from 'react-toastify';
import { useFormik } from "formik";


import { useAddNewUserMutation } from "../redux/weblogApi";
import { createUserSchema } from "../createBlog/yup/Yup";

import LoginLogo from '@/public/login.png'
import Link from "next/link";

import { signIn } from "next-auth/react";


const Rigestring = () => {
  const [userFullname, setUserFullname] = useState('');
  const [userAddereses, setUserAddereses] = useState('');
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const [addNewUser, { isLoading }] = useAddNewUserMutation();

  const router = useRouter();


  const createBlog = async (value) => {
    // try {
    //   await addNewUser({
    //     id: nanoid(),
    //     subscribers: 0,
    //     name: value.fullname,
    //     photo: value.photo,
    //     email: value.email,
    //     password: value.password
    //   }).unwrap();
    //     setUserAddereses(''),
    //     setUserFullname(''),
    //     setUserEmail(''),
    //     setUserPassword(''),
    //     toast.success('The user was created successfully')
    //   router.push('/')
    // } catch (error) {
    //   console.log('this is a error from-regestring:', error);
    // }

         try {
           const res = await fetch("http://localhost:9000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: nanoid(),
              subscribers: 0,
              name: value.fullname,
              photo: value.photo,
              email: value.email,
              password: value.password

            }),
          });
        
          if (!res.ok) {
            setError((await res.json()).message);
            return;
          }
        
          router.push("/api/auth/signin");
        } catch (err) {
          setError(err);
        }
  }

  const formik = useFormik({
    initialValues: {
      fullname: userFullname,
      photo: userAddereses,
      email: userEmail,
      password: userPassword
    },
    validationSchema: createUserSchema,
    onSubmit: (value) => {
      createBlog(value)
    }
  })

  return (
    <div className=" bg-slate-200 w-full h-[90vh] overflow-x-hidden">
      <div className="flex items-center justify-center w-full">
        <h1 className=" text-2xl text-slate-600">creating User</h1>
      </div>
      <Grid container sx={{ width: '100%', height: '90%' }} >
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={LoginLogo} width={400} height={400} />
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div className=" bg-slate-400 rounded-md p-6">
            <div className=" my-3">
              <h1 className=" text-2xl text-gray-200">Create and account</h1>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <Grid container>
                  <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: '.5rem' }}>
                    <TextField
                      type="text"
                      sx={{ width: '100%' }}
                      id="fullname"
                      label="username"
                      name="fullname"
                      variant="outlined"
                      value={formik.values?.fullname}
                      onChange={formik.handleChange}
                      error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                      helperText={
                        formik.touched.fullname ? formik.errors.fullname
                          : null
                      }
                    />
                  </Grid>

                  <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: '.5rem' }}>
                    <TextField
                      type="text"
                      sx={{ width: '100%' }}
                      id="photo"
                      name="photo"
                      label="photo address"
                      variant="outlined"
                      value={formik.values?.photo}
                      onChange={formik.handleChange}
                      error={Boolean(formik.touched.photo && formik.errors.photo)}
                      helperText={
                        formik.touched.photo ? formik.errors.photo
                          : null
                      }
                    />
                  </Grid>

                  <Grid xs={12} sm={12} md={12} lg={12} xl={12} sx={{ padding: '.5rem' }}>
                    <TextField
                      type="text"
                      sx={{ width: '100%' }}
                      id="email"
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={formik.values?.email}
                      onChange={formik.handleChange}
                      error={Boolean(formik.touched.email && formik.errors.email)}
                      helperText={
                        formik.touched.email ? formik.errors.email
                          : null
                      }
                    />
                  </Grid>

                  <Grid xs={12} sm={12} md={12} lg={12} xl={12} sx={{ padding: '.5rem' }}>
                    <TextField
                      type="text"
                      sx={{ width: '100%' }}
                      id="password"
                      label="password"
                      name="password"
                      variant="outlined"
                      value={formik.values?.password}
                      onChange={formik.handleChange}
                      error={Boolean(formik.touched.password && formik.errors.password)}
                      helperText={
                        formik.touched.password ? formik.errors.password
                          : null
                      }
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ mt: '.1rem' }} light={true}>or</Divider>
                <div>

                  <div onClick={() => signIn("github", { callbackUrl: '/' })}>
                    <div className=" cursor-pointer border-solid border-2 border-gray-500 rounded-md  hover:bg-gray-700 text-gray-200 hover:text-slate-300 py-2 flex items-center justify-center">
                      <GitHub sx={{ marginX: '.5rem' }} /> sign up width GitHub
                    </div>
                  </div>

                  <div className=" my-3" onClick={() => signIn("github", { callbackUrl: '/' })}>
                    <div className=" cursor-pointer border-solid border-2 border-gray-500 rounded-md  hover:bg-gray-700 text-gray-200 hover:text-slate-300 py-2 flex items-center justify-center">
                      <Google sx={{ marginX: '.5rem' }} /> sign up width Google
                    </div>
                  </div>
                </div>
                <button className="w-full p-2 m-1 bg-sky-600 rounded-md hover:shadow-xl active:shadow-none"
                  type="submit"
                >
                  creating
                </button>

                <div className=" my-2">
                  <h1>Already have an account? <Link href="/api/auth/signin/credentials" className=" text-sky-600">Login here</Link></h1>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Rigestring;