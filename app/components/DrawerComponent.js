'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Drawer,Accordion,AccordionSummary,AccordionDetails,Typography,Button } from "@mui/material";
import {ExpandMore,Close} from '@mui/icons-material'


const DrawerComponent = ({openDrawer,setOpenDrawer}) => {

    const [expanded, setExpanded] = useState(false);


    const router = useRouter()

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setOpenDrawer(false)
    }



    return(
        <Drawer
        open={openDrawer}
        anchor="right"
        onClose={handleClose}
        sx={{
        "@ .MuiDrawer-paper": {
            width: "50%",
        }
        }}
        >
        <div className="flex flex-col">
         <div className="flex justify-end m-1" onClick={handleClose}>
            <Close/>
         </div>
         <div>
          <div onClick={() => {router.push('/'),setOpenDrawer(false)}}>
           <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>Home</Typography>
          </div>
         <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>newblogs</Typography>
         <div onClick={() => {router.push('/createBlog'),setOpenDrawer(false)}}>
         <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>Createblog</Typography>
         </div>
         <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>about</Typography>

         <Accordion sx={{width: '200px',boxShadow: 'none',border: 'none'}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
         <AccordionSummary
           expandIcon={<ExpandMore />}
           aria-controls="panel1bh-content"
           id="panel1bh-header"
          >
          <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer'}}>
           Servises
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>working1</Typography>
          <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>working2</Typography>
          <Typography sx={{  flexShrink: 0,":hover": {color: "black"},cursor: 'pointer',marginLeft: '1rem'}}>working3</Typography>
          </AccordionDetails>
         </Accordion>

         </div>
         <div className="flex flex-col my-3" >
            <Button onClick={() => {router.push('/rigestring'),setOpenDrawer(false)}} variant='text' sx={{display: 'flex',alignItems: 'center',color:'black',margin: '.5rem 1rem' }}>login </Button>
            <Button onClick={() => {router.push('/rigestring'),setOpenDrawer(false)}} variant='outlined' sx={{display: 'flex',alignItems: 'center',color:'black',borderColor: 'black',margin: '0 1rem',':hover': {borderColor: 'black'} }}>Register </Button>
         </div>
        </div>

        </Drawer>
    )
}


export default DrawerComponent;