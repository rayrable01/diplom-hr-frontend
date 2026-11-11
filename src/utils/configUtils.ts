import { useGetConfigQuery } from '@/api/serviceApi/config';

export const useFeatureToggle = (featureToggle: string): boolean => {
  const { data } = useGetConfigQuery();
  if (!data || !featureToggle) return false;

  return data.features[featureToggle] ?? false;
};
