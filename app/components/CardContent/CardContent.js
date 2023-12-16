'use client'

import { Card ,Typography} from "@mui/material"

import { AccessTimeOutlined, AccountCircleOutlined } from "@mui/icons-material";

import CardMediaComponent from "./CardMediaComponent";
import CardBody from "./CardBody";
import CardActionsComponent from "./CardActionsComponent";

const CardContented = ({ blog, Loading }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMediaComponent Loading={Loading} blog={blog} />
       <CardBody Loading={Loading} blog={blog} />
      {Loading ? null :
        <>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '.8rem', marginLeft: '.5rem' }}> <AccountCircleOutlined /> {blog.userName} </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '.8rem', marginLeft: '.5rem' }}> <AccessTimeOutlined /> {blog.date} </Typography>
        </>
      }
      <CardActionsComponent Loading={Loading} blog={blog} />
    </Card>
  )
}

export default CardContented;