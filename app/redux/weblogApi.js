import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const weblogApi = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({baseUrl: 'http://localhost:9000'}),
    tagTypes: ['BLOG','USER'],
    endpoints: builder => ({
        getWeblogs: builder.query({
            query: () => '/blogs',
            providesTags: (result,error,arg) => result? [...result.map(({id}) => ({type: 'BLOG',id}))]: ['BLOG'],
        }),
        getWeblog: builder.query({
            query: (blogId) => `/blogs/${blogId}`,
            providesTags: (result,error,arg) => [{type: 'BLOG',id:arg.id}]
        }),
        getUsers: builder.query({
            query: () => '/users',
            providesTags: (result,error,arg) => result? [...result.map(({id}) => ({type: 'USER',id}))] : ['USER'],
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: (result,error,id) => [{type: 'USER',id}]
        }),
        addNewBlog: builder.mutation({
            query(blog) {
                return{
                  url: '/blogs',
                  method:'POST',
                  body: blog
                }
            },
            invalidatesTags: ['BLOG']
        }),
        addNewUser: builder.mutation({
            query(user) {
                return{
                    url: '/users',
                    method: 'POST',
                    body: user
                }
            },
            invalidatesTags: ['USER']
        }),
        editBlog: builder.mutation({
            query(blog) {
                return{
                  url: `/blogs/${blog.id}`,
                  method: 'PUT',
                  body: blog
                }
            },
            invalidatesTags: (results,error,arg) => [{type: 'BLOG',id: arg.id}]
        }),
        editUser: builder.mutation({
            query(user) {
                return{
                    url: `/users/${user.id}`,
                    method: 'PUT',
                    body: user
                }
            },
            invalidatesTags: (results,error,arg) => [{type: 'USER',id: arg.id}]
        }),
        deleteBlog: builder.mutation({
            query(blog) {
                return {
                    url: `/blogs/${blog.id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: (result,error,arg) => [{type: 'BLOG',id: arg.id}]
        }),
        deleteUser: builder.mutation({
            query(user) {
                return {
                    url: `/users/${user.id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: (result,error,arg) => [{type: 'USER',id: arg.id}]
        })  
    })
})

export const {useGetWeblogsQuery,
    useGetWeblogQuery
   ,useAddNewBlogMutation,
   useAddNewUserMutation,
   useDeleteBlogMutation,
   useDeleteUserMutation,
   useEditBlogMutation,
   useEditUserMutation,
   useGetUserQuery,
   useGetUsersQuery
   } = weblogApi;