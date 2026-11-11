import type { HealthPositiveResponse, HealthBadResponse } from '@/types/types';
import { baseApi } from './baseApiConfiguration';

const heathApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkHealth: builder.query<HealthPositiveResponse | HealthBadResponse, void>({
      query: () => '/health',
      providesTags: ['Health'],
    }),
  }),
});

export const { useCheckHealthQuery } = heathApi;
