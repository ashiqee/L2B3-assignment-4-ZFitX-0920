import { baseApi } from '@/redux/api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: 'GET',
      }),
      providesTags: ['orders'],
    }),
    getSingleOrders: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET',
      }),
      providesTags: ['orders'],
    }),
  

    // addOrder api 
    addOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['orders'],
    }),

    // updateOrder api 
    updateOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['orders'],
    }),

    // delete order api 
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['orders'],
    })
  }),
});

export const {
useAddOrderMutation,
useDeleteOrderMutation,
useGetOrdersQuery,
useGetSingleOrdersQuery,
useUpdateOrderMutation
} = orderApi;
