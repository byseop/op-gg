import { useQuery } from 'react-query';
import { summonerApi } from '@core/api/summoner';

export const queryKey = {
  getSummonerInfo: (name: string) => ['summoner-info', name] as const,
  getSummonerMost: (name: string) => ['summoner-most', name] as const
};

export const useGetSummoner = (name: string) => {
  return useQuery(
    queryKey.getSummonerInfo(name),
    () => summonerApi.getSummonerInfo(name),
    {
      suspense: true
    }
  );
};

export const useGetSummonerMost = (name: string) => {
  return useQuery(
    queryKey.getSummonerMost(name),
    () => summonerApi.getSummonerMost(name),
    {
      suspense: true
    }
  );
};
