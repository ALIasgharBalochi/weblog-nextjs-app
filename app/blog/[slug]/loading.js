'use client'

import { Skeleton } from "@mui/material"

export default function Loading() {

    return(
         <div>
            <div className="flex flex-row">
                <Skeleton sx={{m: '.5rem',width: '70%',height: 400}} variant="rounded"/>
                <Skeleton variant="rounded" sx={{m: '.5rem',width: '30%',height: 200}}/>
            </div>
            <div className="flex flex-col m-2 w-2/3">
              <Skeleton variant="text" sx={{fontSize: '2rem',width: '30%'}}/>
              <Skeleton variant="text" sx={{fontSize: '1rem',width: '90%'}}/>
              <Skeleton variant="text" sx={{fontSize: '1rem',width: '90%'}}/>
              <Skeleton variant="text" sx={{fontSize: '1rem',width: '90%'}}/>
              <Skeleton variant="text" sx={{fontSize: '1rem',width: '90%'}}/>
              <Skeleton variant="text" sx={{fontSize: '1rem',width: '50%'}}/>

            </div>
         </div>   
    )
}