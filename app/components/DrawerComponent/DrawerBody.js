
import {Typography,Accordion,AccordionSummary,AccordionDetails} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

export default function DrawerBody({setOpenDrawer,handleChange,expanded}) {
    return(
                <div>
                    <div onClick={() => { router.push('/'), setOpenDrawer(false) }}>
                        <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>Home</Typography>
                    </div>
                    <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>newblogs</Typography>
                    <div onClick={() => { router.push('/createBlog'), setOpenDrawer(false) }}>
                        <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>Createblog</Typography>
                    </div>
                    <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>about</Typography>

                    <Accordion sx={{ width: '200px', boxShadow: 'none', border: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer' }}>
                                Servises
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>working1</Typography>
                            <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>working2</Typography>
                            <Typography sx={{ flexShrink: 0, ":hover": { color: "black" }, cursor: 'pointer', marginLeft: '1rem' }}>working3</Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
    )
}