

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import CardContented from "../CardContent/CardContent";
import SkeletionLoadingCard from "../SkeletionLoadingCard";

export default function BodyContent({ loading, blogs }) {
    return (
        <Grid container>
            {loading ? (
                <SkeletionLoadingCard Loading={loading} />
            ) : (
                blogs.map((blog) => (
                    <Grid key={blog.id} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                        <CardContented blog={blog} Loading={loading} />
                    </Grid>
                ))
            )}
        </Grid>
    )
}