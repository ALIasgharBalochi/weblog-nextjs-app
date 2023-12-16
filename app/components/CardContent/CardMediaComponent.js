

import {CardMedia,Skeleton} from "@mui/material"


export default function CardMediaComponent({Loading,blog}) {
    return(
      Loading ? (
        <CardMedia
          sx={{ height: 180 }}
        >
          <Skeleton variant="rectangular" sx={{ width: '20rem', height: '100%' }} />
        </CardMedia>
      ) : (
        <CardMedia
          sx={{ height: 180 }}
          image={blog?.photo_back}
          title="green iguana"
        />
      )
    )
    
}