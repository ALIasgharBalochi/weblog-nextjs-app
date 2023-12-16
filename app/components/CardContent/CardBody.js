import { CardContent,Skeleton,Typography } from "@mui/material"

import MaxString from "../MxString"

export default function CardBody({blog,Loading}) {
    return (

        <CardContent>
            {Loading ? (
                <>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem', m: '.2rem', width: '40%' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', m: '.2rem' }} />
                </>
            ) :
                (
                    <>
                        <Typography variant="h5" >
                            <MaxString str={blog?.title} n={45} />
                        </Typography>

                    </>
                )
            }


        </CardContent>
    )
}