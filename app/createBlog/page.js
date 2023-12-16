'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";

import { nanoid } from "@reduxjs/toolkit";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { toast } from 'react-toastify';

import { useSession } from "next-auth/react";
import Image from "next/image";

import { useAddNewBlogMutation } from "../redux/weblogApi";
import CreatingPhoto from '@/public/imageCreating.png'
import FormCreateBlog from "./FormCreateBlog";


const CreateBlog = () => {

  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogAddresses, setBlogAddresses] = useState('');

  const [addNewBlog] = useAddNewBlogMutation();

  const { data: session } = useSession();

  const router = useRouter();

  const createBlog = async (value) => {
    try {
      await addNewBlog({
        id: nanoid(),
        date: new Date().toISOString(),
        photo_tomnail: value.imageUrl,
        photo_back: value.imageUrl,
        title: value.title,
        content: value.content,
        userName: session.user.name,
        userID: session.user.id,
        reactions: {
          like: 0,
          dislike: 0
        }
      }).unwrap();
      setBlogAddresses(''),
        setBlogContent(''),
        setBlogTitle(''),
        toast.success('The blog was created successfully')
      router.push('/')
    } catch (error) {
      console.log('this is a error from-createBlog:', error);
    }
  }


  return (
    <div className=" bg-slate-200 w-full h-[90vh] overflow-x-hidden">
      <div className="flex items-center justify-center w-full">
        <h1 className=" text-2xl text-slate-600">creating Blog</h1>
      </div>
      <Grid container sx={{ width: '100%', height: '90%' }} >
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={CreatingPhoto} width={600} height={600} />
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <FormCreateBlog createBlog={createBlog} blogAddresses={blogAddresses} blogContent={blogContent} blogTitle={blogTitle} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateBlog;