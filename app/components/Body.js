'use client'

import { useEffect,useState } from "react";

import { Fab,Tooltip } from "@mui/material";
import {KeyboardArrowUp} from '@mui/icons-material'
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import CardContented from "./CardContent";
import SkeletionLoadingCard from "./SkeletionLoadingCard";

const Body = ({blogs,loading}) => {
console.log('body blog:',blogs);
    const [showFab,setShowFab] = useState(false);

    const hendleBackToTop = () => {
        document.documentElement.scrollTop = 0;
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        });

        return () => {
            window.removeEventListener('scroll',null)
        }
    },[])


    return(
        <div className="mt-3 min-h-screen">
            <Grid container>
             {loading? (
               <SkeletionLoadingCard Loading={loading}/>
             ) : (
              blogs.map((blog) => (
              <Grid key={blog.id} xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                <CardContented blog={blog} Loading={loading}/>
              </Grid>
             ))
             )}
            </Grid>
            <div className={` showfB ${showFab && 'showfb'}`}>
             <Tooltip title="back to top" placement="top">
              <Fab onClick={hendleBackToTop} sx={{bottom: 16,right: 16,position: 'fixed'}} size="small" color='inherit' aria-label="add">
               <KeyboardArrowUp sx={{color: 'slategray'}}/>
              </Fab>
             </Tooltip>
            </div>
        </div>
    )
}

export default Body;