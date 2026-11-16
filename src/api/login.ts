import { LoginResponseSchema, type LoginRequest, type LoginResponse } from '@/types/auth';
import { baseApi } from './serviceApi/baseApiConfiguration';

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),

      transformResponse: (response: unknown) => {
        return LoginResponseSchema.parse(response);
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useLoginMutation } = loginApi;
