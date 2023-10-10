
'use client'

import {useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { nanoid } from "@reduxjs/toolkit";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TextField,InputLabel,MenuItem,FormControl,Select } from "@mui/material";

import { toast  } from 'react-toastify';
import { useFormik } from "formik";


import { useAddNewBlogMutation,useGetUsersQuery } from "../redux/weblogApi";
import { createBlogSchema } from "./yup/Yup";
import CreatingPhoto from '@/public/imageCreating.png'


const CreateBlog = () => {
        const [blogTitle,setBlogTitle] = useState('');
        const [blogContent,setBlogContent] = useState('');
        const [blogAddresses,setBlogAddresses] = useState('');
        const [userSelect,setUserSelect] = useState('')

        const [addNewBlog] = useAddNewBlogMutation();
        const {data: users,isLoading: usersLoading} = useGetUsersQuery();

        const router = useRouter();


        const createBlog = async (value) => {
                 try{
                  await addNewBlog({
                    id: nanoid(),
                    date: new Date().toISOString(),
                    photo_tomnail: value.imageUrl,
                    photo_back: value.imageUrl,
                    title: value.title,
                    content:value.content,
                    user: value.userSelector,
                    reactions: {
                      like: 0,
                      dislike: 0
                    }
                  }).unwrap();
                  setBlogAddresses(''),
                  setBlogContent(''),
                  setBlogTitle(''),
                  setUserSelect('')
                  toast.success('The blog was created successfully')
                  router.push('/')
                 }catch (error) {
                   console.log('this is a error from-createBlog:',error);
                 }
        }

        const formik = useFormik({
          initialValues: {
            title: blogTitle,
            imageUrl: blogAddresses,
            userSelector: userSelect,
            content: blogContent
          },
          validationSchema: createBlogSchema,
          onSubmit: (value) => {
            createBlog(value)
          }
        })

    return(
        <div className=" bg-slate-200 w-full h-[90vh] overflow-x-hidden">
            <div className="flex items-center justify-center w-full">
                <h1 className=" text-2xl text-slate-600">creating Blog</h1>
            </div>
            <Grid container sx={{width: '100%',height: '90%'}} >
                <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{display: 'flex', justifyContent: 'center',alignItems:'center'}}>
                    <Image src={CreatingPhoto} width={600} height={600} />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{display: 'flex', justifyContent: 'center',alignItems:'center',padding: '1rem'}}>
                    <div>
                     <form onSubmit={formik.handleSubmit}>
                     <Grid container>
                      <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{padding: '.5rem'}}>
                       <TextField 
                      type="text" 
                       sx={{width:'100%'}} 
                       id="title" 
                       label="title"
                       name="title" 
                       variant="outlined"
                       value={formik.values?.title}
                       onChange={formik.handleChange}
                       error={Boolean(formik.touched.title && formik.errors.title)}
                       helperText={
                        formik.touched.title? formik.errors.title
                        :null
                       } 
                       />
                      </Grid>
                      <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{padding: '.5rem'}}>
                       <TextField 
                       type="text" 
                       sx={{width: '100%'}} 
                       id="imageUrl" 
                       name="imageUrl"
                       label="image address" 
                       variant="outlined"
                       value={formik.values?.imageUrl}
                       onChange={formik.handleChange}
                       error={Boolean(formik.touched.imageUrl && formik.errors.imageUrl)}
                       helperText={
                        formik.touched.imageUrl? formik.errors.imageUrl
                        :null
                       } 
                        />
                      </Grid>
                     </Grid>

                     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">user</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="userSelector"
                        name="userSelector"
                        value={formik.values?.userSelector}
                        label="Age"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.userSelector && formik.errors.userSelector)}
                        helperText={
                        formik.touched.userSelector? formik.errors.userSelector
                        :null
                       }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {usersLoading? null: 
                           (
                            users.map((user) => (
                              <MenuItem value={user.id}>{user.fullname}</MenuItem>
                            ))
                           )
                        }
                      </Select>
                     </FormControl>


                      <TextField
                       type="text" 
                        sx={{width: '100%',margin: '.5rem'}}
                        id="content"
                        name="content"
                        label="text"
                        multiline
                        rows={4}
                        value={formik.values?.content}
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.content && formik.errors.content)}
                        helperText={
                        formik.touched.content? formik.errors.content
                        :null
                       }                        
                      />
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

export default CreateBlog;