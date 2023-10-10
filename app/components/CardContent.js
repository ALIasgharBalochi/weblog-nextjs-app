'use client'

import Link from "next/link"

import {Card,CardActions,CardContent,CardMedia,Typography,Skeleton} from "@mui/material"

import { useGetUserQuery } from "../redux/weblogApi";

import MaxString from "./MxString";

const CardContented = ({blog,Loading}) => {

   const {data: User} = useGetUserQuery(blog?.user)

    return(
        <Card sx={{ maxWidth: 345 }}>
        {Loading? (
          <CardMedia 
          sx={{height: 180}}
          >
          <Skeleton variant="rectangular" sx={{width: '20rem',height: '100%'}}/>
          </CardMedia>
        ): (
          <CardMedia
          sx={{ height: 180 }}
          image={blog?.photo_back}
          title="green iguana"
        />
        )}

        <CardContent>
         {Loading? (
          <>
           <Skeleton variant="text" sx={{fontSize: '1.5rem',m: '.2rem',width: '40%'}}/>
           <Skeleton variant="text" sx={{fontSize: '1rem',m: '.2rem'}}/>
          </>
         ): 
         (
          <>
          <Typography  variant="h5" >{ blog.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            <MaxString str={blog?.content} n={45}/>
          </Typography>
          </>
          )       
         }


        </CardContent>
        {Loading? null :
        <>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '.8rem',marginLeft: '.5rem'}}> created by: {User?.fullname} </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '.8rem',marginLeft: '.5rem'}}> time: {blog.date} </Typography>
        </>
        }
        <CardActions>
          {Loading? (
            <div className="flex flex-row">
             <Skeleton variant="rounded" sx={{mx: '.5rem',width: '2rem',height: '.5rem'}}/>
             <Skeleton variant="rounded" sx={{width: '2rem',height: '.5rem'}}/>
            </div>
          ): (
            <>
            <Link href={{
            pathname: `/blog/${blog.id}`,
            query: {slug: blog.id}
            }}>
           <button className="bg-gray-500 m-1 px-3 py-1 hover:bg-gray-400 rounded-lg">
            view
           </button>
          </Link>
           <button className="border m-1 px-3 py-1 hover:bg-gray-400 rounded-lg">share</button>
            </>
          )}
        </CardActions>
      </Card>
    )
}

export default CardContented;