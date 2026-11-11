import { baseApi } from './baseApiConfiguration';

type Feature = Record<string, boolean>;

export interface ConfigResponse {
  features: Feature;
  appVersion: string;
}

const configApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConfig: builder.query<ConfigResponse, void>({
      query: () => '/config',
      providesTags: ['Config'],
    }),
  }),
});

export const { useGetConfigQuery } = configApi;
