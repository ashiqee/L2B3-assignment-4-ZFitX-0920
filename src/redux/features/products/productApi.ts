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
        getCartsProducts: builder.query({
          query: (productIds) => {
            console.log("Get LEN",productIds.length)
            
            if(productIds.length>0){
              console.log(productIds.length);
              
              return{
                url:`/products/carts`,
                method:'GET',
                params:{productIds:productIds},
              }
            }
            return{
              url:`/products/carts`,
              method:'GET',
              params:["asdad"],
            }
          },
          providesTags: ["products"],
          
        }),
        addProduct: builder.mutation({
            query:(data)=>(
                
                   {
                
                
                url:'/products',
                method: "POST",
                body:data,
            }),
            invalidatesTags:["products"],
        })
      }),
})

export const {useGetProductsQuery,useAddProductMutation,useGetSingleProductsQuery,useGetCartsProductsQuery}= productApi;