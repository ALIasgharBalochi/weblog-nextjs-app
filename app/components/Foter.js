'use client'

import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FacebookRounded,Instagram,LinkedIn,GitHub, } from "@mui/icons-material";
import Link from "next/link";

const Foter = () => {
    return(
        <div className="rounded-t-lg bg-slate-400 p-2 " >
         <Grid container sx={{display: 'flex',justifyContent: 'space-between'}}>
             <Grid xs={12} sm={6} md={6} lg={6} xl={6}  > 
            <div className="flex flex-row  justify-center items-center">
             <div className="text-slate-300 bg-slate-600 rounded-full  m-3 p-2 hover:cursor-pointer">
               <FacebookRounded/>
             </div>
             <div className="text-slate-300 bg-slate-600 rounded-full  m-3 p-2 hover:cursor-pointer">
               <Instagram/>
             </div>
             <div className="text-slate-300 bg-slate-600 rounded-full  m-3 p-2 hover:cursor-pointer">
             <LinkedIn/>
             </div>
             <div className="text-slate-300 bg-slate-600 rounded-full  m-3 p-2 hover:cursor-pointer">
             <Link href='https://github.com/ALIasgharBalochi'>
              <GitHub/>
             </Link>
             </div>
            </div>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={6} xl={6}  sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}> 
               <div className=" flex flex-row justify-center items-center">
                <TextField  id="outlined-basic" label="Email for me" variant="outlined" />
                <Button variant="outlined" sx={{color: 'slategray',borderColor: 'GrayText',margin: '0 .5rem'}}>submit</Button>
               </div>
            </Grid>
          </Grid> 
        </div>
    )
}

export default Foter;