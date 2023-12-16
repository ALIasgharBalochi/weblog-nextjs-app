
import {TextField,Divider} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Google,GitHub } from "@mui/icons-material"

import Link from "next/link"

import { signIn } from "next-auth/react"

import { useFormik } from "formik"
import { createUserSchema } from "../createBlog/yup/Yup"

export default function FormRigestring({createBlog,userAddereses,userEmail,userPassword,userFullname}) {


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
    )
}