'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Drawer } from "@mui/material";
import { Close } from '@mui/icons-material'

import DrawerBody from "./DrawerComponent/DrawerBody";
import DrawerButtons from "./DrawerComponent/DrawerButtons";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {

    const [expanded, setExpanded] = useState(false);

    const router = useRouter()

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setOpenDrawer(false)
    }

    return (
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
                    <Close />
                </div>
                <DrawerBody handleChange={handleChange} setOpenDrawer={setOpenDrawer} expanded={expanded}/>
                <DrawerButtons router={router} setOpenDrawer={setOpenDrawer} />
            </div>

        </Drawer>
    )
}

export default DrawerComponent;