import { baseApi } from '@/redux/api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams(
          filters as Record<string, string>,
        ).toString();

        console.log(params);

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
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useGetSingleProductsQuery,
  useGetCartsProductsQuery,
} = productApi;
