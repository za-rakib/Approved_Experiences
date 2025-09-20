// lib/services/api.ts
// services/api.ts
// lib/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://selene-trickish-bennett.ngrok-free.app',
  prepareHeaders: (headers, { getState, endpoint }) => {
    // Skip adding authorization header for endpoints that don't need it
    const noAuthEndpoints = ['login', 'register', 'createMemberFromPayment'];
    
    if (noAuthEndpoints.includes(endpoint)) {
      return headers;
    }
    
    // Get token from state for endpoints that need authentication
    const token = (getState() as any).auth?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Member','Order'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/login', // Changed from '/api/auth/login'
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/api/auth/register', // Changed from '/api/auth/register'
        method: 'POST',
        body: userData,
      }),
    }),
    createMemberFromPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/api/members/create-from-payment',
        method: 'POST',
        body: paymentData,
      }),
      invalidatesTags: ['Member'],
    }),
     createOrder: builder.mutation({
      query: (orderData) => ({
        url: '/api/orders/',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Order'],
    }),
    getMemberProfile: builder.query({
      query: () => '/api/members/profile',
      providesTags: ['Member'],
    }),

    getMembershipPlans: builder.query({
      query: () => 'api/membership/tiers/',
      providesTags: ['Member'],
    }),

  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useCreateMemberFromPaymentMutation,
  useCreateOrderMutation,
  useGetMemberProfileQuery,
  useGetMembershipPlansQuery,
} = api