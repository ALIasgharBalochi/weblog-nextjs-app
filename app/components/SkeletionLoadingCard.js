
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import CardContented from "./CardContent/CardContent";

const SkeletionLoadingCard = ({Loading}) => {
    // skeletion for body page
    return(
        <>
           {Loading? (
            <Grid container>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
                <Grid xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent: 'center',padding: '1rem'}}>
                  <CardContented  Loading={Loading}/>
                </Grid>
            </Grid>
           ): null}
        </>
    )
}

export default SkeletionLoadingCard;