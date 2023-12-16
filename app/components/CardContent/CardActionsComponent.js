
import { CardActions,Skeleton } from "@mui/material"

import Link from "next/link"

export default function CardActionsComponent({Loading,blog}) {
   return(
      <CardActions>
        {Loading ? (
          <div className="flex flex-row">
            <Skeleton variant="rounded" sx={{ mx: '.5rem', width: '2rem', height: '.5rem' }} />
            <Skeleton variant="rounded" sx={{ width: '2rem', height: '.5rem' }} />
          </div>
        ) : (
          <>
            <Link href={{
              pathname: `/blog/${blog.id}`,
              query: { slug: blog.id }
            }}>
              <button className="bg-gray-500 m-1 px-3 py-1 hover:bg-gray-400 rounded-lg">
                view
              </button>
            </Link>
            <button className="border m-1 px-3 py-1 hover:bg-gray-400 rounded-lg">share</button>
          </>
        )}
      </CardActions>
   )
}