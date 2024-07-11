import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
          query: () => ({
            url: '/products',
            method: 'GET',
          }),
          providesTags:["products"]
        }),
        addProduct: builder.mutation({
            query:(data)=>({
                
                
                url:'/products',
                method: "POST",
                body:data,
            }),
            invalidatesTags:["products"],
        })
      }),
})

export const {useGetProductsQuery,useAddProductMutation}= productApi;