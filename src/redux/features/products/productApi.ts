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
        getSingleProducts: builder.query({
          query: (id) => ({
            url: `/products/${id}`,
            method: 'GET',
          }),
          providesTags:["products"]
        }),
        addProduct: builder.mutation({
            query:(data)=>(
                console.log(data),
                   {
                
                
                url:'/products',
                method: "POST",
                body:data,
            }),
            invalidatesTags:["products"],
        })
      }),
})

export const {useGetProductsQuery,useAddProductMutation,useGetSingleProductsQuery}= productApi;