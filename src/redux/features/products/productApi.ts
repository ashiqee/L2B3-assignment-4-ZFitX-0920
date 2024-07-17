import { baseApi } from '@/redux/api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(
          filters as Record<string, string>,
        ).toString();


        return `products?${params}`;
      },
      providesTags: ['products'],
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getCartsProducts: builder.query({
      query: (productIds) => {
        if (productIds.length > 0) {
         

          return {
            url: `/products/carts`,
            method: 'GET',
            params: { productIds: productIds },
          };
        }
        return {
          url: `/products/carts`,
          method: 'GET',
          params: ['asdad'],
        };
      },
      providesTags: ['products'],
    }),

    // addProduct api 
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),

    // updateProduct api 
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),

    // delete product api 
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    })
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useGetSingleProductsQuery,
  useGetCartsProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
