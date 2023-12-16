

import { Button } from "@mui/material"

export default function DrawerButtons({setOpenDrawer,router}) {
    return (

        <div className="flex flex-col my-3" >
            <Button onClick={() => { router.push('/rigestring'), setOpenDrawer(false) }} variant='text' sx={{ display: 'flex', alignItems: 'center', color: 'black', margin: '.5rem 1rem' }}>login </Button>
            <Button onClick={() => { router.push('/rigestring'), setOpenDrawer(false) }} variant='outlined' sx={{ display: 'flex', alignItems: 'center', color: 'black', borderColor: 'black', margin: '0 1rem', ':hover': { borderColor: 'black' } }}>Register </Button>
        </div>
    )
}