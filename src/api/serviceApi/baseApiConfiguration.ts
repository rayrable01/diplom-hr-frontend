import { API_URL } from '@/api/serviceApi/apiRouter';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Health', 'Config', 'Auth', 'Vacancies', 'Applications', 'Resumes'],
  endpoints: () => ({}),
});
