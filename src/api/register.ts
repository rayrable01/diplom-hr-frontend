import { registerResponseSchema, type RegisterRequest, type RegisterResponse } from '@/types/auth';
import { baseApi } from './serviceApi/baseApiConfiguration';

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),

      transformResponse: (response: unknown) => {
        return registerResponseSchema.parse(response);
      },
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
