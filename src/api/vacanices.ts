import { vacancyResponseSchema, type VacancyResponse } from '@/types/vacancies';
import { baseApi } from './serviceApi/baseApiConfiguration';

export interface VacancyParams {
  search?: string;
  status?: string;
  limit?: number;
  offset?: number;
}

const vacanciesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVacancies: builder.query<VacancyResponse, VacancyParams>({
      query: (params) => ({
        url: '/vacancies',
        method: 'GET',
        params: {
          limit: 20,
          offset: 0,
          ...params,
        },
      }),

      transformResponse: (response: unknown) => {
        return vacancyResponseSchema.parse(response);
      },
    }),
  }),
});

export const { useGetVacanciesQuery } = vacanciesApi;
