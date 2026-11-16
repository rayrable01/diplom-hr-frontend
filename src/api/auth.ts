import { baseApi } from './serviceApi/baseApiConfiguration';
import type { User } from '@/types/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => '/auth/me',
      providesTags: ['Auth'],
    }),
  }),
});

export const { useGetMeQuery, useLazyGetMeQuery } = authApi;

export const useFetchMeQuery = useGetMeQuery;
export const useLazyFetchMeQuery = useLazyGetMeQuery;
