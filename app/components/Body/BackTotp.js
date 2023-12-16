
import { Fab, Tooltip } from "@mui/material";
import { KeyboardArrowUp } from '@mui/icons-material'

export default function BackTotop({showFab,hendleBackToTop}) {

    return (
        <div className={` showfB ${showFab && 'showfb'}`}>
            <Tooltip title="back to top" placement="top">
                <Fab onClick={hendleBackToTop} sx={{ bottom: 16, right: 16, position: 'fixed' }} size="small" color='inherit' aria-label="add">
                    <KeyboardArrowUp sx={{ color: 'slategray' }} />
                </Fab>
            </Tooltip>
        </div>
    )

}