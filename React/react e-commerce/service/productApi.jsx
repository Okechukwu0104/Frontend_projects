import.meta.env.VITE_APP_BASE_URL;
import {createApi,fetchBaseQuery} from  "@reduxjs/toolkit/query/react";

export const productApi = createApi({

    reducerPath: "prodictApi",
    baseQuery: fetchBaseQuery({baseUrl: `${productUrl}`}),
    endpoints:(build)=>({
        getAllProducts:build.query({
            query:()=> "/products"
        }),
    })
})
export const {useGetAllProductsQuery} = productApi
