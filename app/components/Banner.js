'use client'

import { useState,useEffect } from "react";

import Link from "next/link";

import { Skeleton } from "@mui/material";

import { useGetWeblogsQuery } from "../redux/weblogApi";

import MaxString from "./MxString";

const Banner = () => {
    const [randomBlog,setRandomBlog] = useState({});

    const {data: blogs,isLoading} = useGetWeblogsQuery();

    useEffect(() => {
        if (!isLoading) {
            setRandomBlog(blogs[Math.floor(Math.random() * blogs.length)])
        }
    },[isLoading])


    return(
        <>
        {isLoading? 
        (
            <div className=" h-56">
             <Skeleton variant="rectangular" sx={{width: '100%',height: '100%',m:0}} />
            </div>
        )
        : (
            <div 
            style={{
            backgroundImage:  `url(${randomBlog?.photo_back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
            ,width: '100%',
            height: '100%',
            overflowX: 'hidden',
            color: 'whitesmoke'
            }}
        >
         <h1 className="m-5"> {randomBlog?.title} </h1>
         <p className="m-5 max-w-md">
         <MaxString str={randomBlog?.content} n={250}/>
         </p>
         <button className="bg-gray-800 mx-5 my-1 px-3 py-1 hover:bg-gray-700 rounded-lg">
         <Link href={{
            pathname: `/blog/${randomBlog.id}`,
            query: {slug: randomBlog.id}
          }}>
          view
          </Link>
         </button>
        </div>
        )}
       
        </>
    )
}

export default Banner;