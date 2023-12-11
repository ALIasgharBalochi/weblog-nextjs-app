'use client' 

import { useState,useEffect } from "react";

import ReactPaginate from "react-paginate";

import { useGetWeblogsQuery } from "../redux/weblogApi";
import Body from "./Body";

const Pagination = ({blogPerPage}) => {
     const [sortedBlogs,setSortedBlogs] = useState([]);
     const [loading,setLoading] = useState(true)
     const [blogOffset,setBlogOffset] = useState(0);

     const {data: blogs,isLoading} = useGetWeblogsQuery();
     console.log('pagination:',blogs);

     const endOffset = blogOffset + blogPerPage;

     const currentBlogs = sortedBlogs?.slice(blogOffset,endOffset);

     const pageCount = Math.ceil(sortedBlogs?.length / blogPerPage);

     const handleClick = e => {
        const newOffset = e.selected * blogPerPage;
        setBlogOffset(newOffset)
        document.documentElement.scrollTo = 0;
     }

     useEffect(() => {
        if (isLoading) {
          console.log('isLOADING');
        }else {
          const orderedBlogs = blogs?.slice().sort((a,b) => b.date?.localeCompare(a.date));
          setSortedBlogs(orderedBlogs)
          setLoading(false);
        }
      },[isLoading,blogs])

    return(
        <>
         <Body blogs={currentBlogs} loading={loading}/>
         <ReactPaginate 
          containerClassName="flex justify-center items-center mt-8 mb-4"
          pageClassName="block border border-solid border-liteGray w-10 h-10 flex items-center justify-center rounded-full mr-2 text-slate-800"
          activeClassName="bg-slate-400 text-light hover:bg-slate-500"
          breakLabel="..."
          onPageChange={handleClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={null}
          nextLabel={null}
          renderOnZeroPageCount={null}
         />
        </>
    )

}

export default Pagination;


