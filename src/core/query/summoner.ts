import { useQuery } from 'react-query';
import { summonerApi } from '@core/api/summoner';

export const queryKey = {
  getSummonerInfo: (name: string) => ['summoner-info', name] as const
};

export const useGetSummoner = (name: string) => {
  return useQuery(queryKey.getSummonerInfo(name), () =>
    summonerApi.getSummonerInfo(name)
  );
};
