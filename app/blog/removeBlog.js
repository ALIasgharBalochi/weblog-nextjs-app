import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Tooltip,Backdrop } from '@mui/material';
import {DeleteOutlined} from '@mui/icons-material';

import { toast  } from 'react-toastify';

import { useDeleteBlogMutation } from "../redux/weblogApi";

const RemoveBlog = ({blog}) => {
     const [openBackDrop,setOpenBackDrop] = useState(false)

    const [deleteBlog] = useDeleteBlogMutation();

    const router = useRouter()

    const handleRemoveBlog = async () => {
           
        try{
            await deleteBlog(blog);
            setOpenBackDrop(false)
            toast.info('The blog was deleted')
            router.push('/');
        }catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
         <Tooltip title="delet blog" placement="top">
          <button onClick={() => setOpenBackDrop(true)} className=' text-slate-300'>
            <DeleteOutlined/>
          </button>
         </Tooltip>

          <Backdrop 
         open={openBackDrop}
         >
          <div className=' bg-slate-100 rounded-lg p-4'>
           <div className='m-3 text-slate-700'>
           Do you want to delete this blog?
           </div>
           <div className='m-3'>
            <button onClick={handleRemoveBlog} className='mx-2 bg-slate-300 px-2 py-1 rounded-md hover:shadow-xl active:shadow-none'>
                yes
            </button>
            <button onClick={() => setOpenBackDrop(false)} className='mx-2 bg-slate-300 px-2 py-1 rounded-md hover:shadow-xl active:shadow-none'>
                no
            </button>
           </div>
         </div> 
         </Backdrop> 
        </div>
    )
}

export default RemoveBlog;