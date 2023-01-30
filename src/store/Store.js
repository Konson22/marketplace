import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3001"}),
    tagTypes:["products"],
    endpoints:(builder) => ({
        getAll: builder.query({
            query:() => 'items',
            providesTages:[{
                type:"products", id:'List'
            }]
        })
    })
})