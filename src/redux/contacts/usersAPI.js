import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64787027362560649a2dc491.mockapi.io',
    credentials: 'same-origin',
  }),
  tagTypes: ['USERS'],
  endpoints: builder => ({
    fetchUsers: builder.query({
      query: (page = 1, limit = 3) => `/users?page=${page}&limit=${limit}`,
      providesTags: ['USERS'],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['USERS'],
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;
