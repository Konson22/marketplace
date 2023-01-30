import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001'}),
    endpoints:(builder) => ({
        getAllProducts:builder.query({
            query:() => 'items'
        })
    })
})
