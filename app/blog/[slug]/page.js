'use client'

import { useState } from "react";

import { Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {AccessTime,AccountBox,PersonRemoveOutlined} from '@mui/icons-material'

import { useGetWeblogQuery,useGetUserQuery } from "@/app/redux/weblogApi";

import ReactionButtons from '@/app/blog/reactionsButton';
import RemoveBlog from "../removeBlog";

const blogPage = ({params}) => {

    const [subscribeCheker,setSubscribeCheker] = useState(false);
    const [counterSubscribe,setCounterSubscribe] = useState(0);

    const {data: blog,isLoading: blogLoading} = useGetWeblogQuery(params.slug);
    const {data: user,isLoading: userLoading} = useGetUserQuery(blog?.user);

    const handleClikeSubscribe = () => {
      setCounterSubscribe(counterSubscribe + 1);
        setSubscribeCheker(!subscribeCheker);
    }

    return(
        <div className=" min-h-screen">
           {blogLoading? null: (
            <Grid container>
                <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                 <div className=" m-2">
                  <img src={blog.photo_back} className="w-full h-auto rounded hover:rounded-lg"/>
                  <h1 className=" my-3 text-2xl w-full text-slate-950">{blog.title}</h1>
                  <p className="w-full text-slate-700">{blog.content}</p>
                 </div>
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                   {userLoading? null: (
                    <div className=" bg-slate-600 m-2 rounded-xl p-3">
                      <div className="flex justify-center items-center">
                        <Avatar  
                            alt={user.fullname}
                            src={user.photo}
                            sx={{width: 100,height: 100}}
                        />
                      </div>
                      <div className=" text-zinc-200">
                        <h1 className=" text-lg"> <AccountBox sx={{mr: '.5rem'}}/> created by: {user.fullname}</h1>
                        <p><PersonRemoveOutlined sx={{mr: '.5rem'}}/>subscriber: {counterSubscribe}</p>
                        <p> <AccessTime sx={{mr: '.5rem'}}/> date: {blog.date}</p>
                      </div> 
                      <div className="flex flex-row justify-between items-center my-3">
                        <div>
                           {subscribeCheker? 
                            <button disabled={subscribeCheker} onClick={handleClikeSubscribe} className="border-slate-400 m-1 px-3 py-1 bg-gray-400 rounded-lg"> 
                              subscribed
                            </button>
                            : 
                            <button disabled={subscribeCheker} onClick={handleClikeSubscribe} className="bg-gray-500 m-1 px-3 py-1 hover:bg-gray-200 rounded-lg"> 
                              subscribe
                            </button>
                            }
                        </div>
                        <div className="flex flex-row">
                         <ReactionButtons/>
                        </div>
                      </div>
                      <RemoveBlog blog={blog}/>
                    </div>
                   )}
                </Grid>
            </Grid>
           )}
            
        </div>
    )
}

export default blogPage;

