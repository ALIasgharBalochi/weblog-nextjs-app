import { TextField } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { useFormik } from "formik"
import { createBlogSchema } from "./yup/Yup"

export default function FormCreateBlog({createBlog,blogTitle,blogAddresses,blogContent}) {


  const formik = useFormik({
    initialValues: {
      title: blogTitle,
      imageUrl: blogAddresses,
      content: blogContent
    },
    validationSchema: createBlogSchema,
    onSubmit: (value) => {
      createBlog(value)
    }
  })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container>
                    <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: '.5rem' }}>
                        <TextField
                            type="text"
                            sx={{ width: '100%' }}
                            id="title"
                            label="title"
                            name="title"
                            variant="outlined"
                            value={formik.values?.title}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.title && formik.errors.title)}
                            helperText={
                                formik.touched.title ? formik.errors.title
                                    : null
                            }
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: '.5rem' }}>
                        <TextField
                            type="text"
                            sx={{ width: '100%' }}
                            id="imageUrl"
                            name="imageUrl"
                            label="image address"
                            variant="outlined"
                            value={formik.values?.imageUrl}
                            onChange={formik.handleChange}
                            error={Boolean(formik.touched.imageUrl && formik.errors.imageUrl)}
                            helperText={
                                formik.touched.imageUrl ? formik.errors.imageUrl
                                    : null
                            }
                        />
                    </Grid>
                </Grid>


                <TextField
                    type="text"
                    sx={{ width: '100%', margin: '.5rem' }}
                    id="content"
                    name="content"
                    label="text"
                    multiline
                    rows={4}
                    value={formik.values?.content}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.content && formik.errors.content)}
                    helperText={
                        formik.touched.content ? formik.errors.content
                            : null
                    }
                />
                <button className="w-full p-2 m-1 bg-slate-300 rounded-md hover:shadow-xl active:shadow-none"
                    type="submit"
                >
                    creating
                </button>
            </form>
        </div>
    )
}